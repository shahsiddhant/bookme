import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public showModal: boolean;
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  date = new FormControl(new Date(1993, 9, 23));
  // startDate = new Date();
  constructor() { }

  ngOnInit() {
    console.log(this.date);
  }

  displayDate(event: MatDatepickerInputEvent<Date>) {
    // event.value shows the date, now get the say and then display the day.

    // then make an API call to get the meetings for that day.

    // Then populate the meeting for that day.

  }


}
