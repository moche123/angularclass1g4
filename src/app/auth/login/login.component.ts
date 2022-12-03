import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor( private _fb:FormBuilder) { }


  public myForm:FormGroup = this._fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['', [Validators.required,Validators.minLength(6)]]
  });

  public message:String[] = [];

  login(){
    console.log(this.myForm.value)
  }

  fieldIsInvalidReactive(field:any){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }
  

}
