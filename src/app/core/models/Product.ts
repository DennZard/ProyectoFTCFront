import { Company } from './Company';
import { Category } from './Category';
export class Product {
  id:number
  added:Date
  price:number
  sells:number
  stock:number
  category:Category
  company:Company
  image:String
  name:String

  constructor() {
    this.id =  0;
    this.added = new Date;
    this.price =  0;
    this.sells = 0;
    this.stock = 0;
    this.category = new Category;
    this.company = new Company;
    this.image =  "";
    this.name = "";
  }

}
