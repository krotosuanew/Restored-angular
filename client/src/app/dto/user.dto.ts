import {MasterDto} from "./master.dto";

export type UserDto = {
  "id": number,
  "email": string,
  "role": string,
  "isActivated": boolean,
  "iat": number,
  "exp": number

}
export type UserListDto = {
  "id": number,
  "email": string,
  "role": string,
  "isActivated": boolean,
  "master"?: null|MasterDto,
}
export type UserResDto = {
  count:number,
  rows:UserListDto[]
}
export type RegisterUserDto={
  email:string
  isMaster:boolean
  name:string
  password:string
}
