import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cinema } from '../services/cinema.service';

@Component({
  selector: 'app-my-movie-component',
  template: `
    <h3>
      This is the page for the movie: {{ movieId }}
    </h3>
    <p> {{movie.title}} </p>
    <p> {{movie.year}} </p>
    <p> {{movie.director}} </p>
    <p> {{movie.room}} </p>
    <p> <img [src]="movie.poster"> </p>
    <p> {{movie.synopsis}} </p>
    <p> {{movie.year}}
    <a [routerLink]="['/']"> Back to list </a>
  `,
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movieId: number;
  movie: Object;

  constructor(private route: ActivatedRoute, private cinema: Cinema) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.movieId = +params['id']);
    console.log(this.movieId);
    this.movie = this.cinema.getMovie(this.movieId);
  }

}
