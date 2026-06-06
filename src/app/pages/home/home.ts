import { Component, inject, signal } from '@angular/core';
import { Hero } from './components/hero/hero';
import { NowPlaying } from './components/now-playing/now-playing';
import { SupabaseService } from '../../supabase';
import { Movie } from '../../supabase';

interface HomeData {
  hero: Movie;
  nowPlaying: Movie[];
  upcoming?: Movie[];
}

@Component({
  selector: 'app-home',
  imports: [Hero, NowPlaying],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private supabaseService = inject(SupabaseService);
  homeData = signal<HomeData | undefined>(undefined);

  ngOnInit() {
    this.loadHomeData();
  }

  async loadHomeData() {
    try {
      const heroData = await this.loadHeroData();
      const nowPlayingData = await this.loadNowPlayingData();

      if (heroData && nowPlayingData) {
        this.homeData.set({
          hero: heroData,
          nowPlaying: nowPlayingData,
        });
      }
    } catch (error) {
      console.error('Błąd inicjalizacji strony głównej:', error);
    }
  }

  async loadHeroData() {
    try {
      const data = await this.supabaseService.getHero();
      return data;
    } catch (error) {
      console.error('Błąd pobierania danych Hero z Supabase:', error);
      return null;
    }
  }

  async loadNowPlayingData() {
    try {
      const data = await this.supabaseService.getNowPlaying();
      return data;
    } catch (error) {
      console.error('Błąd pobierania danych Now Playing z Supabase:', error);
      return null;
    }
  }
}
