import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

 // ngOnInit(private noticiaService: NoticiaService): void {
    ngOnInit(): void {
   // this.carregaNoticias()
  }
   // carregaNoticias(){
     // this.noticiaService.getNoticias().subscribe((noticiasRecebidas: Noticias[]) => {
      //  this.listaNoticias = noticiasRecebidas;
       // console.log(this.listaNoticias);
   //   })
   // }


}
