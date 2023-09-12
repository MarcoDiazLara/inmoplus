import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './servicios/login.service';
import { Router } from '@angular/router';
import { CerrarComponent } from './cerrar/cerrar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formLogin: FormGroup;


  constructor(
    private loginService: LoginService,
    private router: Router
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
  .then(() => {this.router.navigate(["\Cerrar"])})
    .catch(error => {console.log(error)});
  }
}
