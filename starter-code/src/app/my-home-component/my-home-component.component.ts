import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from '../services/cinema.service';

@Component({
  selector: 'app-my-home-component',
  template:`
  <table>
      <tr>
        <th> Name</th>
        <th colspan="2"> Details </th>
      </tr>
      <tr *ngFor="let movie of movies">
        <td> {{ movie.title }} </td>
        <td>
          <a [routerLink]="['movie',movie.id]"> details (link) </a>
        </td>
      </tr>
    </table>
  `,
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {

  constructor(private router: Router, private cinema: Cinema) { }
  movies: Array<Object> = this.cinema.getMovies();

  ngOnInit() {
    this.movies
  }

}
