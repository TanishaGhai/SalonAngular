import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { ICustomers } from './customers';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomersService) {
  }

  customer: ICustomers;
  errorMessage = '';
  pageTitle = 'Customers Details';

  ngOnInit() {
    console.log('on Init');
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.getProduct(param);
    }
  }

  getProduct(id: string) {
    this.customerService.getCustomer(id).subscribe(
      customer => this.customer = customer,
      error => this.errorMessage = <any>error);
  }


}
