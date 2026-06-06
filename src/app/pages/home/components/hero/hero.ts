import { Component, input } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { LucideTicket, LucideCirclePlay } from '@lucide/angular';

@Component({
  selector: 'app-hero',
  imports: [HlmButtonImports, HlmBadgeImports, LucideTicket, LucideCirclePlay],
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  movieData = input.required<any>();
}
