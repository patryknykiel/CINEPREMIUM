import { Component } from '@angular/core';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-loyalty-club',
  imports: [HlmCardImports, HlmButtonImports],
  templateUrl: './loyalty-club.html',
  styleUrl: './loyalty-club.css',
})
export class LoyaltyClub {}
