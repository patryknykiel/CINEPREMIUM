import { Component, input } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-upcoming-movie-card',
  imports: [HlmBadgeImports, HlmButtonImports, HlmCardImports, DatePipe],
  templateUrl: './upcoming-movie-card.html',
  styleUrl: './upcoming-movie-card.css',
})
export class UpcomingMovieCard {
  movieData = input.required<any>();
}
