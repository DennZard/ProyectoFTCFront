export class Employee {
  constructor(
    private id: number,
    private email: String,
    private name: String,
    private lastName: String,
    private phone: String,
    private active: boolean
  ) {}

  getName() {
    return this.name
  }
}
