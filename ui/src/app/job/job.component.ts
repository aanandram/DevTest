import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EngineerService } from '../services/engineer.service';
import { JobService } from '../services/job.service';
import { JobModel } from '../models/job.model';
import { Observable } from "rxjs";
import { CustomerModel } from "../models/customer.model";
import { CustomerService } from "../services/customer.service";
import { shareReplay } from "rxjs/operators";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  public customers$: Observable<CustomerModel[]>;
  public engineers: string[] = [];

  public jobs: JobModel[] = [];

  public newJob: JobModel = {
    jobId: null,
    engineer: null,
    when: null,
  };

  constructor(
    private readonly customerService: CustomerService,
    private engineerService: EngineerService,
    private jobService: JobService) { }

  ngOnInit() {
    this.engineerService.GetEngineers().subscribe(engineers => this.engineers = engineers);
    this.jobService.GetJobs().subscribe(jobs => this.jobs = jobs);
    this.fetchCustomers()
  }

  public createJob(form: NgForm): void {
    if (form.invalid) {
      alert('form is not valid');
    } else {
      this.jobService.CreateJob(this.newJob).then(() => {
        this.jobService.GetJobs().subscribe(jobs => this.jobs = jobs);
      });
    }
  }

  private fetchCustomers() {
    this.customers$ = this.customerService
      .GetCustomers()
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }

}
