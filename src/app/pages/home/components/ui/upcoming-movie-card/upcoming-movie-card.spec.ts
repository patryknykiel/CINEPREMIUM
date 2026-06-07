import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMovieCard } from './upcoming-movie-card';

describe('UpcomingMovieCard', () => {
  let component: UpcomingMovieCard;
  let fixture: ComponentFixture<UpcomingMovieCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingMovieCard],
    }).compileComponents();

    fixture = TestBed.createComponent(UpcomingMovieCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
