import { User } from "./User"

export class Company {
  id:number
  name:String
  owner:User

  constructor() {
    this.id = 0
    this.name = ""
    this.owner = new User
  }

}
