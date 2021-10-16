import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component ({
    selector:'login-app',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent {
    title = 'Login Operations';
    loginForm:any;
    newUserModal:boolean = false;

    constructor(){

    }
    ngOnInit(){
        this.loginForm = new FormGroup({
            userName : new FormControl(''),
            password : new FormControl('')
        })
    }

    onSubmit(){
        console.log(this.loginForm.getRawValue());
    }

    newUser(){
        this.newUserModal = true
    }
}