import {Injectable} from "@angular/core";
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Router} from '@angular/router';
import {OrderResDto} from "../../app/dto/order.dto";

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders: OrderResDto | null
  header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }
  constructor(
    private http: HttpClient,
    private router: Router,

  ) {

  }

  public getOrders():Observable<OrderResDto> {
    return this.http.get<OrderResDto>(
      environment.apiUrl + 'api/orders/',
      this.header,
    )
  }
  public addOrder(name:string,price:number) {
    this.http.post(
      environment.apiUrl + 'api/orders/',{
        name,price
      },
      this.header,
    ).subscribe(res=>console.log(res))
  }
  public delete(id:number) {
    this.http.delete(
      environment.apiUrl + `api/orders/${id}`,
      this.header,
    ).subscribe(res=>console.log(res))
  }

}
