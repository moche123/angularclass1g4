import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    public _router: Router
  ) {}

  public myForm: FormGroup = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  public message: String[] = [];

  login() {
    const { email, password } = this.myForm.value;

    this._authService.login(email, password).subscribe((ok: any) => {
      if (ok==true) {
        this._router.navigateByUrl('/personaje');
      }else{
        //! ERROR MESSAGES
        if(ok.msg){
          setTimeout(()=> {
            this.message.push(ok.msg)
          },300)
          setTimeout(()=> {
            this.message = []
          },3000)
        }
        if(ok.errors?.email){
          setTimeout(()=> {
            this.message.push(ok.errors.email.msg)
          },300)
          setTimeout(()=> {
            this.message = []
          },3000)
        }
        if(ok.errors?.password){
          setTimeout(()=> {
            this.message.push(ok.errors.password.msg)
          },300)
          setTimeout(()=> {
            this.message = []
          },3000)
        }
      }
    });
  }

  fieldIsInvalidReactive(field: any) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }
}
