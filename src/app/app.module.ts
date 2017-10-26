import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

var config = {
  apiKey: "AIzaSyA8Ll1OmnuAzctmhfkxe3Xkze7lfaACAsQ",
  authDomain: "bookme-11e75.firebaseapp.com",
  databaseURL: "https://bookme-11e75.firebaseio.com",
  projectId: "bookme-11e75",
  storageBucket: "bookme-11e75.appspot.com",
  messagingSenderId: "1007201102083"
};

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
