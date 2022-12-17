import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    public _router: Router
  ) { }

  public myForm: FormGroup = this._fb.group({
    name: ['usuario2', [Validators.required, Validators.minLength(6)]],
    email: ['usuario2@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  })

  message: string[] = [];

  ngOnInit(): void {
  }
  fieldIsInvalidReactive(field:any){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  register(){
    const { name, email, password } = this.myForm.value;

    this._authService.register(name, email, password, 1, true).subscribe((ok: any) => {
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
        if(ok.errors?.name){
          setTimeout(()=> {
            this.message.push(ok.errors.name.msg)
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

}
