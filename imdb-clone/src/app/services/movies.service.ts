import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDto } from '../type/movie';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = "https://api.themoviedb.org/3";
  private apikey = "489c39bd367015e71001ee37c6ac7412";

  constructor(private http: HttpClient) { }

  getMovieByType(type:string, count=20) {
    return this.http
    .get<MovieDto>(`${this.apiUrl}/movie/${type}?api_key=${this.apikey}`).pipe(map((data) => {
      return data.results.slice(0,count)
    }));
  }
}