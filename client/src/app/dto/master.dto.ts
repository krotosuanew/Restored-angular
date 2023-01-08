import {CityDto} from "./city.dto";

export type MasterListDto = {
  "id": number,
  "email": string,
  name:string,
  rating:number,
  "role": string,
  "isActivated": boolean,
  cities: CityDto[],
  user: {
    activationLink?: string
    email: string
    facebookId?: number
    id: number
    isActivated: boolean
    role: string
  }
}
export type MasterResDto = {
 count:number,
  rows:MasterListDto[]
}
export type MasterDto = {
  id: number,
  isActivated: boolean,
  name: string,
  rating: number,
  userId: number
}
export type MasterAddDto = {
  isActivated: boolean,
  name: string,
  rating: number,
  cityId: number[],
  isMaster:boolean,
  email:string,
  password:string
}
export type MasterReqDto={
  id?:number,
  isActivated: boolean,
  name: string,
  rating: number,
  cityId: number[],
  isMaster:boolean,
  email:string,
  password:string
}
export type MasterReqUpdateDto={
  id?:number,
  name: string,
  rating: number,
  cityId: number[],
}
