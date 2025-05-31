export class Employee {
  constructor(
    public id:number,
    public email: String,
    public name: String,
    public lastName: String,
    public phone: String,
    public active: boolean
  ) {}

  getName() {
    return this.name;
  }
}
