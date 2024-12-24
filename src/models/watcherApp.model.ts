// models/watcherApp.model.ts
export interface Watcher {
    id: string;
    fullname: string;
    movies: string[];
  }
  
  export interface Watchers {
    watchersArr: Watcher[];
  }
  