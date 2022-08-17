import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MovieFormComponent } from '../movie-form/movie-form.component';

import { ApiService } from '../api.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService],
})
export class MainModule { }
