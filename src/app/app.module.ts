import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimeslotComponent } from './timeslot/timeslot.component';
import { DayComponent } from './day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    TimeslotComponent,
    DayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
