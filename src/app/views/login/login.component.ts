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
        
  const listapalavras: string[] = ["select", "from", "drop", "or", "having", "group", "by", "insert", "exec ",  "--", "#", "*"]


listapalavras.forEach( palavra => {
 // if(this.UserModel.email.toLowerCase().includes(palavra)) {
    
    this.mensagem = "Dados invalidos"
   
    return;
  }
  
//}
),

this.loginService.login(this.UserModel).subscribe((response) => {
      console.log("response: ", response)
    //  console.log("Login com sucesso!")
      console.log("O Status code é: ", response.status)
      console.log("o token de permissão é: ", response.body.accessToken)

      this.mensagem = "Bem vindo " + response.body.user.nome 
      console.log(this.mensagem)
     // this.router.navigateByUrl("/");
      this.mensagem = "Login com sucesso!";
      console.log(this.UserModel);
      
    }, 


  (responseError) => {
      console.log("responseErro", responseError)
      //console.log("responseErro.error: " this.mensagem)
      //this.mensagem = responseError.error
    
      if(responseError.error == "Cannot find user"){
        this.mensagem = "Usuario não encontrado"
        
      }
      if(responseError.error == "Incorrect password"){
        this.mensagem = "Senha Incorreta, digite novamente"
        
      }
      if(responseError.error == "Password is too short"){
        this.mensagem = "Senha muito curta"
        
      }
      if(responseError.error == "Email format is invalid"){
        this.mensagem = "Formato de Email invalido, tente novamente"
        
      }
     
      
    // this.mensagem = "Email ou senha incorretas tente novamente";

    } );

  }
}
