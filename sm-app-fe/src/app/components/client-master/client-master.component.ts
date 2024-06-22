import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-master',
  templateUrl: './client-master.component.html',
  styleUrls: ['./client-master.component.css']
})
export class ClientMasterComponent implements OnInit {
  clientForm: FormGroup;
  clients: any = [];
  isClientInEditMode = false
  updateText = "Add Client"

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.clientForm = this.fb.group({
      clientName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      mobileNo: ['', Validators.required],
      address: ['', Validators.required],
      subStartDate: ['', Validators.required],
      subEndDate: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.checkPasswords });
  }

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe(res => {
      this.clients = res.data
      // console.log(res.data);
    });
  }

  addClient() {
    if (this.isClientInEditMode) {
      this.clientService.editClient(this.clientForm.value).subscribe(() => {
        this.loadClients();
        this.clientForm.reset();
      })
    } else {
      console.log(this.clientForm.value);
      this.clientService.addClient(this.clientForm.value).subscribe(() => {
        this.loadClients();
        this.clientForm.reset();
      });
    }
  }

  editClient(client: any) {
    this.clientForm.patchValue(client);
    this.updateText = "Update Client"
    this.isClientInEditMode = !this.isClientInEditMode
    console.log(this.isClientInEditMode);
    
  }

  deleteClient(clientId: string) {
    console.log(clientId);
    this.clientService.deleteClient(clientId).subscribe(() => {
      this.loadClients();
    });
  }

  checkPasswords(group: FormGroup) {
    // let pass = group.controls.password.value;
    // let confirmPass = group.controls.confirmPassword.value;
    // return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit() { }
}
