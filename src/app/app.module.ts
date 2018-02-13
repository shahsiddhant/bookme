import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { SaveFormComponent } from './save-form/save-form.component';
import { TimeAxisComponent } from './time-axis/time-axis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TimeslotComponent } from './timeslot/timeslot.component';
import { RoomService } from './shared/services/room.service';
import { TimeslotService } from './shared/services/timeslot.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { StartPromptComponent } from './start-prompt/start-prompt.component';
import { DisplayReservationDetailsComponent } from './display-reservation-details/display-reservation-details.component';



@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    SaveFormComponent,
    TimeAxisComponent,
    TimeslotComponent,
    StartPromptComponent,
    DisplayReservationDetailsComponent
  ],
  exports: [
    MatDatepickerModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    // AngularFirestoreModule,
    HttpClientModule,
    MatSelectModule,
    MatButtonModule

  ],
  providers: [RoomService, CookieService, TimeslotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
