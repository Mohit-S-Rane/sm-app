import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.css']
})
export class CustomerMasterComponent {
  customerForm: FormGroup;
  customers: any = [];
  isCustomerInEditMode = false
  updateText = "Add Customer"

  constructor(private fb: FormBuilder, private customerService: CustomerService) {
    this.customerForm = this.fb.group({
      customerName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      mobileNo: ['', Validators.required],
      role: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadCustomer();
  }

  loadCustomer() {
    this.customerService.getCustomers().subscribe(res => {
      this.customers = res.data
      // console.log(res.data);
    });
  }

  addCustomer() {
    if (this.isCustomerInEditMode) {
      this.customerService.editCustomer(this.customerForm.value).subscribe(() => {
        this.loadCustomer();
        this.customerForm.reset();
      })
    } else {
      console.log(this.customerForm.value);
      this.customerService.addCustomer(this.customerForm.value).subscribe(() => {
        this.loadCustomer();
        this.customerForm.reset();
      });
    }
  }

  editCustomer(client: any) {
    this.customerForm.patchValue(client);
    this.updateText = "Update Customer"
    this.isCustomerInEditMode = !this.isCustomerInEditMode
    console.log(this.isCustomerInEditMode);
    
  }

  deleteCustomer(clientId: string) {
    console.log(clientId);
    this.customerService.deleteCustomer(clientId).subscribe(() => {
      this.loadCustomer();
    });
  }

  checkPasswords(group: FormGroup) {
    // let pass = group.controls.password.value;
    // let confirmPass = group.controls.confirmPassword.value;
    // return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit() { }
}
