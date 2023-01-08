import {EventEmitter, Injectable} from "@angular/core";
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {ClocksDto, ClocksReqDto, ResGetClocks} from "../../app/dto/clocks.dto";

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  clocks: EventEmitter<ClocksDto[] | null> = new EventEmitter<ClocksDto[] | null>()
  header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {

  }

  public async getClocks(): Promise<void> {
    const res = await this.http.get<ResGetClocks>(
      environment.apiUrl + 'api/sizes/',
      this.header,
    ).toPromise()
    if (!res) {
      return
    }
    this.clocks.emit(res.rows)
  }

  public async addClocks(clockInfo:ClocksReqDto) {
    await this.http.post(
      environment.apiUrl + 'api/sizes/', clockInfo,
      this.header,
    ).toPromise()
    await this.getClocks()
  }

  public async delete(id: number) {
    await this.http.delete(
      environment.apiUrl + `api/sizes/${id}`,
      this.header,
    ).toPromise()
    await this.getClocks()
  }

  public async updateClock(clockInfo:ClocksReqDto) {
    await this.http.put(
      environment.apiUrl + `api/sizes/${clockInfo.id}`, clockInfo,
      this.header,
    ).toPromise()
    await this.getClocks()
  }

}
