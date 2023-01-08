import {CityDto} from "./city.dto";
import {MasterListDto} from "./master.dto";

export enum STATUS {
  WAITING = 'WAITING',
  REJECTED = 'REJECTED',
  ACCEPTED = "ACCEPTED",
  DONE = 'DONE'
}

export type OrderDto = {
  city: CityDto,
  cityId: number,
  endTime: string,
  id: number,
  master: MasterListDto,
  masterId: number,
  name: string,
  payPalId: string,
  photoLinks: Array<string>,
  price: number,
  sizeClock: { date: string },
  status: STATUS,
  time:string,
  user: { email: string },
  userId: number
}
export type OrderResDto = {
  count: number,
  rows: OrderDto[]
}
