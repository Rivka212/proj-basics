import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonClockComponent } from './season-clock.component';

describe('SeasonClockComponent', () => {
  let component: SeasonClockComponent;
  let fixture: ComponentFixture<SeasonClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeasonClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
