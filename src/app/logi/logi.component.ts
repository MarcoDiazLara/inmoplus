import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';
import { CerrarComponent } from '../cerrar/cerrar.component';

@Component({
  selector: 'logi-root',
  templateUrl: './logi.component.html',
  styleUrls: ['./logi.component.css']
})
export class LogiComponent {
  formLogin: FormGroup;


  constructor(
    private loginService: LoginService,
    private router: Router,
  ){
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit():void{

  }

  onSubmit(){
    this.loginService.login(this.formLogin.value)
  .then(() => {this.router.navigate(["Cerrar"])})
    .catch(error => {console.log(error)});
  }

  Google(){
    this.loginService.loginwithgoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/Cerrar']);
      })
      .catch(error => console.log(error))
  }

  Facebook(){
    this.loginService.loginWithFacebook()
      .then(response => {
        console.log(response);
        this.router.navigate(['/Cerrar']);
      })
      .catch(error => console.log(error))
  }
  
  xd(){
    this.router.navigate(['/hola']);
  }

}
