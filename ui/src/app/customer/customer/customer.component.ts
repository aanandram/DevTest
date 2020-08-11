import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CustomerModel } from "../../models/customer.model";
import { CustomerService } from "../../services/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: []
})
export class CustomerComponent implements OnInit {

   public customers$: Observable<CustomerModel[]>;
   public createForm: FormGroup;

   constructor(
    private readonly customerService: CustomerService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      name: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      customerType: "Large",
    });
    this.getAllCustomers();
  }

  createCustomer() {
    if (this.createForm.invalid) {
      alert('Form Invalid');
    } else {
      this.customerService
        .CreateCustomer(this.createForm.value)
        .subscribe(() => this.getAllCustomers());
    }
  }

  private getAllCustomers() {
    this.customers$ = this.customerService
      .GetCustomers()
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }

}
