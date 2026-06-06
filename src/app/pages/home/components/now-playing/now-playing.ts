import { Component, input } from '@angular/core';
import { HlmCarouselImports } from '@spartan-ng/helm/carousel';
import { MovieCard } from '../ui/movie-card/movie-card';

@Component({
  selector: 'app-now-playing',
  imports: [HlmCarouselImports, MovieCard],
  templateUrl: './now-playing.html',
  styleUrl: './now-playing.css',
})
export class NowPlaying {
  moviesData = input.required<any>();
}
