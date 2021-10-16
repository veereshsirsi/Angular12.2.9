import {Component} from "@angular/core";
import {FormBuilder, FormArray, FormGroup } from "@angular/forms";

@Component({
    selector : "register-app",
    templateUrl : "./register.component.html",
    styleUrls : ["./register.component.css"]
})

export class RegisterComponent {
    registerForm:any;
    constructor(private fb:FormBuilder){};
    ngOnInit(){
        
        this.registerForm = this.fb.group({
            userName:[''],
            newPassword:[''],
            langName: this.fb.array([
                this.addLang()
            ]),
            
        })
       
    };

    onSubmit(){
        console.log(this.registerForm.getRawValue())
    }

    addLang() : FormGroup {
        return this.fb.group({
            lange : [null]
        })
    }
    addNewRow(){
        (<FormArray>this.registerForm.get('langName').push(this.addLang()))
    }
    delRow(i:number){
        (<FormArray>this.registerForm.get('langName').removeAt(i));
    }
}