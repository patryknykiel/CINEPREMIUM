import { Component, signal } from '@angular/core';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('CINEPREMIUM');
}
