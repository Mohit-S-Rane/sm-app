import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "src/app/services/alert-service";
import { ApiService } from "src/app/services/api-service";


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent {
    signupForm: FormGroup;

    constructor(private router: Router, private apiService: ApiService, private alertService: AlertService) {
        this.signupForm = new FormGroup({
            emailId: new FormControl(null, [Validators.required]),
            name: new FormControl(null, []),
            password: new FormControl(null, [Validators.required]),
            mobileNo: new FormControl(null, [Validators.required])
        })
    }

    signup(){
        this.apiService.signup(this.signupForm.value).subscribe((res)=>{
            this.alertService.success('User added successfully');
            this.router.navigate(['/dashboard'])
        })
        
    }

    login(){
        this.router.navigate(['/login']);
    }
}