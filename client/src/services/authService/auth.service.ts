import {EventEmitter, Injectable} from "@angular/core";
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';
import {RegisterUserDto, UserDto} from "../../app/dto/user.dto";

export enum Roles{
  ADMIN='ADMIN',
  CUSTOMER='CUSTOMER',
  MASTER='MASTER'
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: EventEmitter<UserDto | null> = new EventEmitter<UserDto | null>()
  header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  public login(userInfo: {email: string, password: string}) {

    return this.http.post<{ token: string }>(
      environment.apiUrl + 'api/users/login/',
      {
        dataForAuthorizations: userInfo
      },
    ).subscribe((res) => {
        const user: UserDto = jwt_decode(res.token)
        this.user.emit(user)
        localStorage.setItem('token', res.token)
        user.role === Roles.ADMIN ?
          this.router.navigate(['/admin/orders']) : this.router.navigate(['/']);
      }
    )

  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);

  }

  public async registration(userData: RegisterUserDto) {
   const res = await this.http.post(
      environment.apiUrl + 'api/users/registration/',
        userData

    ).toPromise()
    this.router.navigate(['/congratulation']);
  }

  public registrationFromAdmin(userData: string) {
    return this.http.post(
      environment.apiUrl + 'api/users/registrationAdmin/', {
        dataForAuthorizations: userData
      }
    )
  }

  public check(): Observable<{ token: string }> {
    return this.http.get<{ token: string }>(
      environment.apiUrl + 'api/users/auth/',
      this.header
    )
  }

  // public getUser() {
  //   return this.user
  // }
  // public setUser(user:UserDto) {
  //   this.user = user
  // }
}
