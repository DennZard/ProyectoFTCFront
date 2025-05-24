import { User } from "./User"

export class Company {
  constructor(public id: number, public name: String, public owner: User ) {}
}
