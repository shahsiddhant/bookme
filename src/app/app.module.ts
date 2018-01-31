import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SaveFormComponent } from './save-form/save-form.component';
import { TimeAxisComponent } from './time-axis/time-axis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TimeslotComponent } from './timeslot/timeslot.component';
import { RoomService } from './shared/services/room.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

// let config = {
//   apiKey: 'AIzaSyA8Ll1OmnuAzctmhfkxe3Xkze7lfaACAsQ',
//   authDomain: 'bookme-11e75.firebaseapp.com',
//   databaseURL: 'https://bookme-11e75.firebaseio.com',
//   projectId: 'bookme-11e75',
//   storageBucket: 'bookme-11e75.appspot.com',
//   messagingSenderId: '1007201102083'
// };



@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    SaveFormComponent,
    TimeAxisComponent,
    TimeslotComponent
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
  providers: [RoomService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
