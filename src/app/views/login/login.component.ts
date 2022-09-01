import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

 
  UserModel = new User();

  mensagem = "";

  onSubmit() {
    this.loginService.login(this.UserModel).subscribe( (response) => {
      console.log("Login com sucesso!")
      
      this.router.navigateByUrl("/");
      this.mensagem = "Login com sucesso!";
      console.log(this.UserModel);
      
    }, (error) => {
      console.log("Email ou senha incorretas")
      this.mensagem = error.error;
     this.mensagem = "Email ou senha incorretas";

    } )
  }
}
