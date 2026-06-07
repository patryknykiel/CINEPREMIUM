import { Component, input } from '@angular/core';
import { UpcomingMovieCard } from '../ui/upcoming-movie-card/upcoming-movie-card';

@Component({
  selector: 'app-upcoming',
  imports: [UpcomingMovieCard],
  templateUrl: './upcoming.html',
  styleUrl: './upcoming.css',
})
export class Upcoming {
  moviesData = input.required<any>();
}
