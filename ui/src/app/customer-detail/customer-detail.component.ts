import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";
import { CustomerService } from "../services/customer.service";
import { ActivatedRoute } from "@angular/router";
import { CustomerModel } from "../models/customer.model";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  private customerId: number;

  customer$: Observable<CustomerModel>;

  constructor(
    route: ActivatedRoute,
    private readonly customerService: CustomerService
  ) {
    this.customerId = route.snapshot.params.id;
  }

  ngOnInit() {
    this.customer$ = this.customerService
      .GetCustomer(this.customerId)
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }

}
