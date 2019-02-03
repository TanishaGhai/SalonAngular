import {Injectable} from '@angular/core';
import {ICustomers} from './customers';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {tap, catchError, map} from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';
import { throwError } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class CustomersService {
    private customersURL = 'http://localhost:3000/api/customers';

    constructor(private httpClient: HttpClient) {

    }
    getCustomers(): Observable<ICustomers[]> {
        return this.httpClient.get<ICustomers[]>(this.customersURL).pipe(
            tap(data => console.log('All' + JSON.stringify(data))),
            catchError(this.hanldeError)
        );
    }

    getCustomer(id: string): Observable<ICustomers> {
       return this.getCustomers().pipe(
        map((customers: ICustomers[]) => customers.find(p => p.customerName === id))
      );
  }

    private hanldeError(err: HttpErrorResponse) {
        let errorMsg: String = '';
        if (err.error instanceof ErrorEvent) {
            errorMsg = `Error occurred + ${err.error.message}`;

        } else {
            errorMsg = `Server side Error  + ${err.status} + message is ${err.message}`;
        }
        console.log(errorMsg);
        return throwError(errorMsg);
    }
}
