import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/api/movies/';
  url = 'http://localhost:8000/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token b19ce512b60d6ff3107be760ccc095e0463abe14'
  })


  private movies = ['LOR', '50 Shades', 'Star Wars'];

  constructor( private  http: HttpClient) { }

  getMovies(){
    return this.http.get(this.baseUrl, {headers: this.headers})
  }

  getMovie(id: number){
    return this.http.get(`${this.baseUrl}${id}/`, {headers: this.headers})
  }

  createMovie(title: string, description: string){
    const body = JSON.stringify({title: title, description: description});
    return this.http.post(`${this.baseUrl}`, body, {headers: this.headers})
  }

  updateMovie(id: number, title: string, description: string){
    const body = JSON.stringify({title: title, description: description});
    return this.http.put(`${this.baseUrl}${id}/`, body, {headers: this.headers})
  }

  deleteMovie(id: number){
    return this.http.delete(`${this.baseUrl}${id}/`, {headers: this.headers})
  }

  rateMovie(rate: number, movieId: number){
    const body = JSON.stringify({stars: rate});
    return this.http.post(`${this.baseUrl}${movieId}/rate_movie/`, body, {headers: this.headers})
  }

  loginUser(authData: any){
    const body = JSON.stringify({authData});
    return this.http.post(`${this.url}auth/`, body, {headers: this.headers})
  }


}
