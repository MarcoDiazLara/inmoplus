import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-cerrar',
  templateUrl: './cerrar.component.html',
  styleUrls: ['./cerrar.component.css']
})
export class CerrarComponent {


  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  ngOnInit(): void {
  }

  onClick() {
    this.loginService.logout()
      .then(() => {
        this.router.navigate(['/logi']);
      })
      .catch(error => console.log(error));
  }
  }

