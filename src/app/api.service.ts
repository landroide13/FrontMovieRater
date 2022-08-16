import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/api/movies/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token b19ce512b60d6ff3107be760ccc095e0463abe14'
  })


  private movies = ['LOR', '50 Shades', 'Star Wars'];

  constructor( private  http: HttpClient) { }

  getMovies(){
    return this.http.get(this.baseUrl, {headers: this.headers})
  }

  
}
