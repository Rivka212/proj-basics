import { Component } from '@angular/core';
import { Season } from '../../models/seasonClock.model'

@Component({
  selector: 'season-clock',
  standalone: false,

  templateUrl: './season-clock.component.html',
  styleUrl: './season-clock.component.scss'
})
export class SeasonClockComponent {

  date = new Date
  locale = 'en-US'

  season: Season = {
    month: '',
    currentSeason: '',
    isDark: false,
  }
  monthNames: string[] = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  ngOnInit() {
    this.updateSeason()
    setInterval(() => {
      this.date = new Date()
      this.updateSeason();
    }, 1000);
  }

  updateSeason() {
    const currentMonth = this.monthNames[this.date.getMonth()];
    this.season.month = currentMonth;

    if (currentMonth === 'December' || currentMonth === 'January' || currentMonth === 'February') {
      this.season.currentSeason = 'Winter';
    } else if (currentMonth === 'March' || currentMonth === 'April' || currentMonth === 'May') {
      this.season.currentSeason = 'Spring';
    } else if (currentMonth === 'June' || currentMonth === 'July' || currentMonth === 'August') {
      this.season.currentSeason = 'Summer';
    } else {
      this.season.currentSeason = 'Autumn';
    }
  }

  getDayName(date: Date, locale: string): string {
    return date.toLocaleDateString(locale, { weekday: 'long' });
  }

  toggleDarkMode() {
    this.season.isDark = !this.season.isDark
  }

  get sectionStyle(): string {
    return this.season.isDark ? 'dark' : '';  
  }

}
