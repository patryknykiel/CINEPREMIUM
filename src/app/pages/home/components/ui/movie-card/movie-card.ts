import { Component, input } from '@angular/core';
import { LucideStar } from '@lucide/angular';

@Component({
  selector: 'app-movie-card',
  imports: [LucideStar],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  movieData = input.required<any>();
}
