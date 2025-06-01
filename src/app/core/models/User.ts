import { Company } from "./Company"
import { Roles } from "./Roles"

export class User {
  constructor(
    public id: number,
    public username: String,
    public password: String,
    public email: string,
    public phone: String,
    public company: Company,
    public roles: Roles[],
    public money: number
  ) {}

  hasRole(roleName: string): boolean {
    return this.roles.some((r) => r.name === roleName);
  }

  static getUser() {
    var object = JSON.parse(sessionStorage.getItem('user'));
    var userObject = object.data.user;
  console.log(userObject.money);
   return new User(
      userObject.id,
      userObject.username,
      "",
      userObject.email,
      userObject.phone,
      userObject.company,
      userObject.roles,
      userObject.money
    )
  }
}
