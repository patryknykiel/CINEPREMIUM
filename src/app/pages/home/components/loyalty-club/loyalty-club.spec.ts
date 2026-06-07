import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyClub } from './loyalty-club';

describe('LoyaltyClub', () => {
  let component: LoyaltyClub;
  let fixture: ComponentFixture<LoyaltyClub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoyaltyClub],
    }).compileComponents();

    fixture = TestBed.createComponent(LoyaltyClub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
