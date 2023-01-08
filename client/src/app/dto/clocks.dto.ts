export type ClocksDto = {
  "id": number,
  "name": string,
  "date": string,
}
export type ResGetClocks = {
  count:number,
  rows:ClocksDto[]
}
export type ClocksReqDto = {
  "id"?: number,
  "name": string,
  "date": string,
}
