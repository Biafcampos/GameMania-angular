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

  userModel= new User()

  recebeDados(){
    console.log(this.userModel)
  } 
  UserModel = new User();

  mensagem = "";

  onSubmit() {
    this.loginService.login(this.UserModel).subscribe( (response) => {
      this.mensagem = "Login com sucesso!";
      this.router.navigateByUrl("/");
    }, (error) => {
      console.log(error)
      this.mensagem = error.error;
    } )
  }
}
