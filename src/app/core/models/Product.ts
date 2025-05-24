import { Company } from './Company';
import { Category } from './Category';
export class Product {


  constructor(
    public id:number,
    public added:Date,
    public price:number,
    public sells:number,
    public stock:number,
    public category:Category,
    public company:Company,
    public image:String,
    public name:String
  ) {}

}
