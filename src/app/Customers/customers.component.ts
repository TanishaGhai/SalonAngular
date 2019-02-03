import { Component, OnInit } from '@angular/core';
import { ICustomers } from './customers';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { CustomersService } from './customers.service';


@Component(
  {
    selector: 'app-cust-root',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css'],
    // providers:[customersService]
  }
)
export class CustomersComponent implements OnInit {

  constructor(private customerService: CustomersService) {

  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter( value: string) {
    this._listFilter = value;
    this.filteredCusromers = this.listFilter ? this.PerformFilter(this.listFilter) : this.customers;
  }

  pageTitle = 'Customers List';
  _listFilter: string;
  errorMessage: string;

  private _customerService;
  customers: ICustomers[];


    filteredCusromers: ICustomers[];
  ngOnInit(): void {
        console.log('on Init');
        this.customerService.getCustomers().subscribe(
          customer => {this.customers = customer,
          this.filteredCusromers = this.customers; },
          error => this.errorMessage = <any>error
          );


    }

   PerformFilter(listFil: string): ICustomers[] {
        return this.customers.filter((customer: ICustomers) =>
        customer.customerName.toLocaleLowerCase().indexOf(listFil.toLocaleLowerCase()) !== -1);
   }



}
