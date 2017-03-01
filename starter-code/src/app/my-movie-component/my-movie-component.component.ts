import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from '../services/cinema.service';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  constructor(private router: Router, private cinema: Cinema) { }

  ngOnInit() {
  }

}
