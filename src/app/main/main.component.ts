import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies: any = [];
  selectedMovie = null;
  editMovie = false;

  constructor(private api:ApiService) { }

  ngOnInit(): void {  
    this.api.getMovies().subscribe(data => {
      this.movies = data
     },
     error => console.log(error)
     )
  }

  selectMovie(movie:any){
    this.selectedMovie = movie
    //console.log('Selected Movie', this.selectedMovie)
  }

}
