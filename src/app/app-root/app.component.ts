import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proj-basics';

  currentPage: number = 1

  showPage(page: number) {
    this.currentPage = page
  }

}
