import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

export interface Movie {
  id: number;
  title: string;
  description: string;
  rate: number;
  genre: string;
  duration: number;
  releaseDate: Date;
  posterUrl: string;
  bannerUrl: string;
  heroUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabasePublishableKey);
  }

  getMovies() {
    return this.supabase.from('movie').select('*');
  }

  async getHero() {
    const today = new Date().toISOString().split('T')[0];

    const { data, error } = await this.supabase
      .from('movie')
      .select('*')
      .lte('releaseDate', today)
      .order('releaseDate', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) {
      console.error('Błąd pobierania Hero:', error);
      return null;
    }

    return data;
  }

  async getNowPlaying() {
    const today = new Date().toISOString().split('T')[0];

    const { data, error } = await this.supabase
      .from('movie')
      .select('*')
      .lte('releaseDate', today)
      .order('releaseDate', { ascending: false })
      .range(1, 12);

    if (error) {
      console.error('Błąd pobierania Now Playing:', error);
      return [];
    }

    return data;
  }

  async getUpcoming() {
    const now = new Date();
    const currentYear = now.getFullYear();

    const today = now.toISOString().split('T')[0];

    const endOfYear = `${currentYear}-12-31`;

    const { data, error } = await this.supabase
      .from('movie')
      .select('*')
      .gt('releaseDate', today)
      .lte('releaseDate', endOfYear)
      .order('releaseDate', { ascending: true })
      .limit(3);

    if (error) {
      console.error('Błąd pobierania Upcoming:', error);
      return [];
    }

    return data;
  }
}
