import { Movie } from './../../type/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-show-detail',
  standalone: false,
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.css'
})
export class ShowDetailComponent implements OnInit {
  showId = '';

  show$ !: Observable<Movie>;
  constructor(private router: ActivatedRoute, private movieService: MoviesService) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.showId = params['id'];
    })
    this.show$ = this.movieService.getMovieById(this.showId)
  }

}
