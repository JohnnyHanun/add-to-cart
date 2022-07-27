import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  public addMoviesList : any = [];
  public MoviesList = new BehaviorSubject<any>([]); //read about


  getMovies(){
    return this.MoviesList.asObservable();// like const i think
  }
  

  setMovie(Movie : any)
  {
    this.addMoviesList.push(...Movie);
    this.MoviesList.next(Movie);//daka 52
  }

  addMovie(movie : any)
  {
    // if(this.addMoviesList.includes(movie))
    // {
    //  return;
    // } 
    this.addMoviesList.push(movie);
    this.MoviesList.next(this.addMoviesList);
  }
}
