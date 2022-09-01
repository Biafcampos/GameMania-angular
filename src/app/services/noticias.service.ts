import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  url = "http://localhost:3000/noticias";


  constructor(private httpClient: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getNoticias(): Observable<Noticia[]> {
    return this.httpClient.get<Noticia[]>(this.url)
  }

  postNoticias(noticia: Noticia): Observable<Noticia> {
    return this.httpClient.post<Noticia>(this.url, JSON.stringify(noticia), this.httpOptions)
  }
  
}
