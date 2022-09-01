import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import * as $ from 'jquery';
import { Noticia } from 'src/app/models/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  listaNoticias = [] as Noticia[];
  
  noticiaForm = {
    titulo: "Noticia Extra",
    descricao: "Descrição da noticia Extra"
  }

  constructor(private noticiasService: NoticiasService) { }

 ngOnInit(): void {
 
    this.carregaNoticias()
  }
    carregaNoticias(){
      this.noticiasService.getNoticias().subscribe((noticiasRecebidas: Noticia[]) => {
      this.listaNoticias = noticiasRecebidas;
      console.log(this.listaNoticias);
     })
   }

   salvarNoticia() {
    this.noticiasService.postNoticias(this.noticiaForm).subscribe( () => {
      this.carregaNoticias();
    } )
  }

}
