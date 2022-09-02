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
      console.log("O Status code é: ", response.status)
      console.log("o token de permissão é: ", response.body.accessToken)

      this.mensagem = "Bem vindo " + response.body.user.nome 
      console.log(this.mensagem)
     // this.router.navigateByUrl("/");
      //this.mensagem = "Login com sucesso!";
      console.log(this.UserModel);
      
    }, (responseError) => {
      console.log("responseErro", responseError)
      this.mensagem = responseError.error
      
     this.mensagem = "Email ou senha incorretas tente novamente";

    } )
  }
  
}
