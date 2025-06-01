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
    if (sessionStorage.getItem('user')) {
      var object = JSON.parse(sessionStorage.getItem('user'));
      if (object?.data) {
        var userObject = object.data.user;
        console.log(userObject.money);
        return new User(
          userObject.id,
          userObject.username,
          '',
          userObject.email,
          userObject.phone,
          userObject.company,
          userObject.roles,
          userObject.money
        );
      } else {
        console.log(sessionStorage.getItem('user'));
        return new User(
          object.id,
          object.username,
          '',
          object.email,
          object.phone,
          object.company,
          object.roles,
          object.money
        );
      }
    }
    return null;
  }
}
