import {EventEmitter, Injectable} from "@angular/core";
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { UserListDto, UserResDto} from "../../app/dto/user.dto";


@Injectable({
  providedIn: 'root',
})
export class UserService {

  users: EventEmitter<UserListDto[] | null> = new EventEmitter<UserListDto[] | null>()
  header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {

  }

  public async getUsers(): Promise<void> {
    const res = await this.http.get<UserResDto>(
      environment.apiUrl + 'api/users/',
      this.header,
    ).toPromise()
    if (!res) {
      return
    }
    this.users.emit(res.rows)
  }

  public async addUser(userInfo:{name: any, email: any, password: any}) {
    await this.http.post(
      environment.apiUrl + 'api/users/registrationAdmin/', userInfo,
      this.header,
    ).toPromise()
    await this.getUsers()
  }

  public async delete(id: number) {
    await this.http.delete(
      environment.apiUrl + `api/users/${id}`,
      this.header,
    ).toPromise()
    await this.getUsers()
  }

  public async changeStatus(id: number, isActivated: boolean) {
    await this.http.put(
      environment.apiUrl + `api/users/activate/${id}`,
      {isActivated, id},
      this.header,
    ).toPromise()
    await this.getUsers()
  }
}
