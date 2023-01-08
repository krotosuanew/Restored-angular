import {EventEmitter, Injectable} from "@angular/core";
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {CityDto, CityReqDto, ResGetCities} from "../../app/dto/city.dto";

@Injectable({
  providedIn: 'root',
})
export class CityService {
 cities: EventEmitter<CityDto[] | null> =new EventEmitter<CityDto[] | null>()
  header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }
  constructor(
    private http: HttpClient,
    private router: Router,

  ) {

  }

  public async getCities() {
    const res =  await this.http.get<ResGetCities>(
      environment.apiUrl + 'api/cities/',
      this.header,
    ).toPromise()
    if(res === undefined){
      return
    }
    this.cities.emit(res.rows)
  }
  public async addCity(cityInfo:CityReqDto) {
   const res = await  this.http.post(
      environment.apiUrl + 'api/cities/',cityInfo,
      this.header,
    ).toPromise()
   await this.getCities()
  }
  public async delete(id:number) {
   await this.http.delete(
      environment.apiUrl + `api/cities/${id}`,
      this.header,
    ).toPromise()
    await this.getCities()
  }
  public async updateCity(cityInfo:CityReqDto) {
  await  this.http.put(
      environment.apiUrl + `api/cities/${cityInfo.id}`,cityInfo,
      this.header,
    ).toPromise()
    await this.getCities()
  }

}
