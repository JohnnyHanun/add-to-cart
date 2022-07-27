import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie_service/movie.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  constructor(private movieService : MovieService) { }
  isAddMovieClicked : boolean=false;
  public Movies : any = [];
  public MovieName : string = '';
  public MovieImage: string = '';
  public MovieRating : string = '';
  public MovieReview : string = '';
  public displayStyle : string = "none";
  public ModalTitle : string ='';
  public ModalText : string = '';
  public mov : any = [];
  ngOnInit(): void
  {
    this.movieService.getMovies().subscribe(res=>{
      this.Movies=res;
    });
    // this.movieService.getModalText().subscribe(res=>{
    //   this.ModalText = res;
    // });

    // this.movieService.getModalTitle().subscribe(res=>{
    //   this.ModalTitle = res;
    // });
    this.MoviesInitalizer();
  }
  MoviesInitalizer() : void
  {
    this.mov.push({image : "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
                      name: "Avengers Endgame",
                      rating: "8.8",review:"Great Movie, wish i could rewatch it!!"},
                      {image : "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2629bad87568290e63a1f62e81fd2d9bf3703268cdbc6ff38a02a6c5de0f0e29._RI_V_TTW_.jpg",
                      name: "Avengers Infinity War",
                      rating: "8.7",review:"The moment Thanos snap is shocking!!"},
                      {image : "https://themify.me/demo/themes/ptb-addon-submissions/files/2015/05/avengers.jpg",
                      name: "Avengers Age Of Ultron",
                      rating: "8.6",review:"Such a mess, but still enjoyable. :)"});
  }
  onClickChange() : void{ 
    this.isAddMovieClicked = !this.isAddMovieClicked;
  }

  addMovie()
  {
    if(this.MovieImage==='' && this.MovieName==='' && this.MovieRating==='' ){ return;}
    if(this.MovieImage===null && this.MovieName===null && this.MovieRating===null ){ return;}
    var MovieObj = {image : this.MovieImage , name:  this.MovieName, rating: this.MovieRating,review: this.MovieReview};
    this.movieService.addMovie(MovieObj);
    //Object.assign;
  }
  
  clear(f : NgForm)
  {
    f.reset();
  }
  openPopup(movie : any) {
    this.displayStyle = "block";
    this.ModalText = movie.review;
    this.ModalTitle = movie.name;
    // this.movieService.setModalText(movie);
    // this.movieService.setModalTitle(movie);
  }
  closePopup() {
    this.displayStyle = "none";
    this.ModalText = '';
    this.ModalTitle = '';
  }

}
