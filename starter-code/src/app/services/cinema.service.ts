import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class Cinema {
  movies: Array<Object> = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
      synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      genres: ["Crime", "Drama"],
      year: 1994,
      director: "Frank Darabont",
      actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton" ],
      hours: ["13:30","16:30","19:30", "22:30"],
      room: 1,
    },{
      id: 2,
      title: "The Godfather",
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
      synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      genres: ["Crime", "Drama"],
      year: 1972,
      director: "Francis Ford Coppola",
      actors: ["Marlon Brando", "Al Pacino", "James Caan"],
      hours: ["13:30","16:30","19:30", "22:30"],
      room: 2,
    },{
      id: 3,
      title: "The Dark Knight",
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      genres: ["Action", "Crime", "Drama"],
      year: 2008,
      director: "Christopher Nolan",
      actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart" ],
      hours: ["13:30","16:30","19:30", "22:30"],
      room: 3,
    },{
      id: 4,
      title: "12 Angry Men",
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      synopsis: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      genres: ["Crime", "Drama"],
      year: 1957,
      director: "Sidney Lumet",
      actors: ["Henry Fonda", "Lee J. Cobb", "Martin Balsam" ],
      hours: ["13:30","16:30","19:30", "22:30"],
      room: 4,
    },{
      id: 5,
      title: "Pulp Fiction",
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg",
      synopsis: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      genres: ["Crime", "Drama"],
      year: 1994,
      director: "Quentin Tarantino",
      actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      hours: ["13:30","16:30","19:30", "22:30"],
      room: 5,
    }
  ]

  constructor(private router: Router) { }

  getMovies(): Array<Object>{
    return this.movies;
   }

  getMovie(id) {
    this.router.navigate(['movie', id]);
  }

}
