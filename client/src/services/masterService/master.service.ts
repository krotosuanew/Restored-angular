import {EventEmitter, Injectable} from "@angular/core";
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {
  MasterListDto,
  MasterReqDto,
  MasterReqUpdateDto,
  MasterResDto
} from "../../app/dto/master.dto";


@Injectable({
  providedIn: 'root',
})
export class MasterService {
  masters: EventEmitter<MasterListDto[] | null> = new EventEmitter<MasterListDto[] | null>()
  header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }

  constructor(
    private http: HttpClient,
  ) {

  }

  public async getMasters(): Promise<void> {
    const res = await this.http.get<MasterResDto>(
      environment.apiUrl + 'api/masters/',
      this.header,
    ).toPromise()
    if (!res) {
      return
    }
    this.masters.emit(res.rows)
  }

  public async addMaster(masterInfo: MasterReqDto) {
    await this.http.post(
      environment.apiUrl + 'api/users/registrationAdmin/', masterInfo,
      this.header,
    ).toPromise()
    await this.getMasters()
  }

  public async delete(id: number) {
    await this.http.delete(
      environment.apiUrl + `api/masters/${id}`,
      this.header,
    ).toPromise()
    await this.getMasters()
  }

  public async updateMaster( masterInfo: MasterReqUpdateDto) {
    await this.http.put(
      environment.apiUrl + `api/masters/${masterInfo.id}`, masterInfo,
      this.header,
    ).toPromise()
    await this.getMasters()
  }

  public async activateMaster(id: number, isActivated: boolean) {
    await this.http.put(
      environment.apiUrl + `api/masters/activate/${id}`, {id, isActivated},
      this.header,
    ).toPromise()
    await this.getMasters()
  }

}
