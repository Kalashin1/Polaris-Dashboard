import { Channel } from './channel'

export interface User {
  name?:string,
  email:string,
  id?: number,
  password:string,
  channels?: Channel[]
}

export interface LoggedInUser {
  name?: string,
  id?: number,
  email: string,
  password: string
  channels?: Channel[]
}
