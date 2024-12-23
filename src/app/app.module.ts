import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { AnimalComponent } from './animal/animal.component';
import { SeasonClockComponent } from './season-clock/season-clock.component';
import { CountDownComponent } from './count-down/count-down.component';
import { WatcherAppComponent } from './watcher-app/watcher-app.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    SeasonClockComponent,
    CountDownComponent,
    WatcherAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
