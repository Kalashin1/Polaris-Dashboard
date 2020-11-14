export interface User {
  firstName:string,
  lastName: string,
  email:string,
  password:string,
  id : string
}

export interface LoggedInUser {
  uid : string,
  displayName : string,
  photoUrl : string,
  email : string,
  emailVerified : boolean
  orders : [],
  cart : []
}
