export interface ICustomers {
    customerName: String;
    customerPhone: String;
    customerBDay: String;
    customerAni: String;
    customerImage: String;
    _id: String;
   /* DeleteCustomer(_id:string): boolean
    EditCustomer(customerName:String,
        customerPhone:String,
        customerBDay:String,
        customerAni:String,
        customerImage:String,
        _id:String) : boolean*/

}

export class Customers implements ICustomers {
    constructor(public _id: String,
    public  customerName: String,
    public customerPhone: String,
    public customerAni: String,
    public customerBDay: String,
    public customerImage ) {

    }

    DeleteCustomer(id: String): boolean {
        return true;
    }

    EditCustomer(customerName: String,
        customerPhone: String,
        customerBDay: String,
        customerAni: String,
        customerImage: String,
        _id: String): boolean {
            return true;
        }
}
