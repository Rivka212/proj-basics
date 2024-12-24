import { Component } from '@angular/core';
import { Watcher, Watchers } from '../../models/watcherApp.model';

@Component({
  selector: 'watcher-app',
  standalone: false,

  templateUrl: './watcher-app.component.html',
  styleUrl: './watcher-app.component.scss'
})

export class WatcherAppComponent {

  watchersArr: Watcher[] = [
    { id: 'w101', fullname: 'Puki Ba', movies: ['Rambo', 'Rocky'] },
    { id: 'w102', fullname: 'Buki Na', movies: ['Rambo', 'Rocky'] },
    { id: 'w103', fullname: 'Noli Ma', movies: ['Rambo', '101 Dalmatians'] },
    { id: 'w104', fullname: 'Kobi Sar', movies: ['The Sound of Music', 'Rocky'] },
    { id: 'w105', fullname: 'Poli Zor', movies: ['Rambo', 'Rocky'] },
  ]

  isModalOpen: boolean = false;
  selectedWatcher: Watcher | null = null;

  openModal(watcher: Watcher): void {
    this.selectedWatcher = watcher;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedWatcher = null;
  }

  onRemoveWatcher(watcherId: string): void {
    this.watchersArr = this.watchersArr.filter(watcher => watcher.id !== watcherId)
    console.log(this.watchersArr);
  }


  onSelectWatcher(watcher: Watcher): void {
    console.log(watcher);
    this.openModal(watcher)
  }

  onAddWatcher(): void {
    const id = this.makeId()
    const newWatcherName = prompt('what is the fullname?')
    if (!newWatcherName) return
    const newWatcherMovies = prompt('what is the movies?')
    if (!newWatcherMovies) return
    const watcher: Watcher = {
      id,
      fullname: newWatcherName,
      movies: newWatcherMovies.split(',').map(movie => movie.trim())
    }
    // movies: newWatcherMovies }
    this.watchersArr.push(watcher)
    console.log(this.watchersArr)
  }

  makeId(): string {
    return 'w' + Math.floor(Math.random() * 1000);
  }
}
