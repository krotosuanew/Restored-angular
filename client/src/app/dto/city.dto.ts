export type CityDto = {
  "id": number,
  "name": string,
  "price": string,
}
export type ResGetCities = {
  count:number,
  rows:CityDto[]
}
export type CityReqDto = {
  "id"?: number,
  "name": string,
  "price": string,
}
