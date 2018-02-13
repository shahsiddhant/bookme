import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import { RoomService } from '../shared/services/room.service';
import { Schedule } from '../shared/services/schedule';
import { TimeslotService } from '../shared/services/timeslot.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public showNotBookedModal: boolean;
  public showBookedModal: boolean;
  public reservationDetails;
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  public date = new Date();
  public dateControl;
  public startTime = null;
  public displayDate = null;
  constructor(private roomService: RoomService, public timeslotService: TimeslotService) { }
  // Get this from API
  public rooms = ['16101', '16103', '16113', '16303', '16313'];
  public reservation: Schedule;
  public reservations = null;
  public dataLoaded = false;
  private options = {
    weekday: 'long', year: 'numeric', month: 'short',
    day: 'numeric'
  };


  ngOnInit() {
    this.roomService.date = this.date.getFullYear() + '-' + ((this.date.getMonth() + 1) < 10 ? '0' : '') +
      (this.date.getMonth() + 1) + '-' + ((this.date.getDate() + 1) < 10 ? '0' : '') + this.date.getDate();
    this.dateControl = new FormControl(this.date);
    this.displayDate = this.date;
    this.displayDate = new Date(this.displayDate).toLocaleDateString('en-US', this.options);
    this.roomService.displayDate = this.displayDate;
    this.updateReservations();
  }

  dateChange(event: MatDatepickerInputEvent<Date>) {
    // event.value shows the date, now get the say and then display the day.
    this.displayDate = event.value;
    this.displayDate = new Date(this.displayDate).toLocaleDateString('en-US', this.options);
    this.roomService.displayDate = this.displayDate;
    this.roomService.date = event.value.getFullYear() + '-' + ((event.value.getMonth() + 1) < 10 ? '0' : '') +
      (event.value.getMonth() + 1) + '-' + ((event.value.getDate() + 1) < 10 ? '0' : '') + event.value.getDate();
    this.updateReservations();

    // Then populate the meeting for that day.

  }
  showHideModal(event) {
    if (this.timeslotService.booked) {
      // Make API call to get reservation details
      if (event === true) {
        this.roomService.getReservationDetails(this.timeslotService.id).subscribe(res => {
          this.reservationDetails = res;
          this.showBookedModal = event;
        });
      } else {
        this.updateReservations();
        this.showBookedModal = event;
      }
    } else {
      if (event !== true) {
        this.updateReservations();
      }
      this.showNotBookedModal = event;
    }

    this.startTime = this.roomService.startTime;
  }

  updateReservations() {
    this.reservations = [];
    this.rooms.forEach(room => {
      this.roomService.getReservationsByRoomByDate(room, this.roomService.date).subscribe(res => {
        this.reservation = new Schedule(res);
        this.reservations.push({
          'room': room,
          'reservation': this.reservation
        });
        this.roomService.reservations.push({
          'room': room,
          'reservation': this.reservation
        });
        this.dataLoaded = this.reservations.length === this.rooms.length;
      });
    });
  }
}
