import { Category } from "../models/Category";
import { Company } from "../models/Company";

export interface ProductDetails {
  name:String,
  category:Category,
  price:number,
  added:Date,
  company: Company,
  sells:number
  stock:number
}
