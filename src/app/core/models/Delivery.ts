import { Status } from './Status';
import { Product } from './Product';
import { Employee } from "./Employee"
import { User } from "./User"

export class Delivery {
  id:number
  customer: User
  employee: Employee
  added: Date
  product: Product
  destination: String
  status: Status

  constructor() {
    this.id = 0
    this.customer = new User
    this.employee = new Employee
    this.added = new Date
    this.product = new Product
    this.destination = ""
    this.status = new Status
  }

}
