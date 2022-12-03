import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _fb: FormBuilder
  ) { }

  public myForm: FormGroup = this._fb.group({
    name: ['usuario', [Validators.required, Validators.minLength(6)]],
    email: ['usuario2@usuario.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  })

  message: string[] = [];

  ngOnInit(): void {
  }
  fieldIsInvalidReactive(field:any){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  register(){
    console.log(this.myForm.value)
  }

}
