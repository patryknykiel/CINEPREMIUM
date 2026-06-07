import { Component, inject, signal } from '@angular/core';
import { Hero } from './components/hero/hero';
import { NowPlaying } from './components/now-playing/now-playing';
import { SupabaseService } from '../../supabase';
import { Movie } from '../../supabase';
import { Upcoming } from './components/upcoming/upcoming';
import { LoyaltyClub } from './components/loyalty-club/loyalty-club';
import { Header } from './components/header/header';

interface HomeData {
  hero: Movie;
  nowPlaying: Movie[];
  upcoming: Movie[];
}

@Component({
  selector: 'app-home',
  imports: [Hero, NowPlaying, Upcoming, LoyaltyClub, Header],
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
      const upcomingData = await this.loadUpcomingData();

      if (heroData && nowPlayingData && upcomingData) {
        this.homeData.set({
          hero: heroData,
          nowPlaying: nowPlayingData,
          upcoming: upcomingData,
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

  async loadUpcomingData() {
    try {
      const data = await this.supabaseService.getUpcoming();
      return data;
    } catch (error) {
      console.error('Błąd pobierania danych Upcoming z Supabase:', error);
      return null;
    }
  }
}
