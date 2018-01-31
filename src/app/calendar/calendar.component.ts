import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import { RoomService } from '../shared/services/room.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public showModal: boolean;
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  public date = new Date(1993, 9, 23);
  public dateControl;
  public startTime = null;
  public displayDate = null;
  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.date = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate();
    this.dateControl = new FormControl(this.date);
    this.displayDate = this.date;

  }

  dateChange(event: MatDatepickerInputEvent<Date>) {
    // event.value shows the date, now get the say and then display the day.
    this.displayDate = event.value;
    this.roomService.date = event.value.getFullYear() + '-' + (event.value.getMonth() + 1) + '-' + event.value.getDate();

    // then make an API call to get the meetings for that day.

    // Then populate the meeting for that day.

  }
  showHideModal(event) {
    this.showModal = event;
    this.startTime = this.roomService.startTime;
  }

}
