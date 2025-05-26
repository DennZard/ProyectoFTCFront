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
}
