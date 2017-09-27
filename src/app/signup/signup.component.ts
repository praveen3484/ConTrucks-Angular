import { NgModule, Component, Pipe, OnInit, Directive, forwardRef, Attribute } from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule,
    Validators,
    FormBuilder,
    NgForm,
    FormGroup,
    FormControl,
    AbstractControl,
    NG_VALIDATORS,
} from '@angular/forms';
// import {
//     ReactiveFormsModule,
//     FormsModule,
//     FormGroup,
//     FormControl,
//     Validators,
//     FormBuilder,
//     NgForm
// } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    myform = this.fb.group({

 //userid validation
        userid: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
       

        //fname validation
        fname: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
       
        //lname validation
        lname: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
       
        //age validation
        age: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]),
       
        //contact validation
        contact: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(12)]),
       

        //Email valildation
        email: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+[0-9]*[\ .\ *\ _]*[a-zA-Z0-9]*@[a-z]+.[a-z]+")]),
        //password valildation     
        password: new FormControl('', [Validators.required, Validators.minLength(8),
        // Validators.pattern("[a-zA-Z0-9]+[\ !\ *]+[a-zA-Z0-9]+")
        ]),
        //Password Confirmation         
        confirmpassword: new FormControl('', [Validators.required,Validators.minLength(8)])

    }, 
    //validating password and confirm password field
    { validator: this.checkIfMatchingPasswords('password', 'confirmpassword') }

    );
    //validation function for password and confirm password field
    checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value || passwordConfirmationInput.invalid) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true })
            }

            else {
                return passwordConfirmationInput.setErrors(null);
            }
        }
    }




    constructor(public router: Router, private fb: FormBuilder) {
    }

    ngOnInit() {

    }

    onSubmit(signupdata: any): void {

        this.router.navigateByUrl("/dashboard");
    }
    //functions used to get values from form to properties in controller
   
    get userid() {
        return this.myform.get("userid");
    }

   
    get fname() {
        return this.myform.get("fname");
    }

    get lname() {
        return this.myform.get("lname");
    }

    get age() {
        return this.myform.get("age");
    }

    get contact() {
        return this.myform.get("contact");
    }


    get email() {
        return this.myform.get("email");

    }
    get password() {
        return this.myform.get("password");

    }
    get confirmpassword() {
        return this.myform.get("confirmpassword");
    }
}
