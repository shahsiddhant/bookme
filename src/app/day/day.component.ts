import { Component, EventEmitter, OnInit, Output, Input, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RoomService } from '../shared/services/room.service';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit, OnChanges {
  @Output() roomSelected: EventEmitter<any> = new EventEmitter();
  @Input() displayDate;
  @Input() reservations;
  private options = {
    weekday: 'long', year: 'numeric', month: 'short',
    day: 'numeric'
  };


  // TODO - get these from the API
  public rooms = ['16101', '16103', '16113', '16303', '16313'];
  public timeSlots = [
    {
      time: '09:00',
      booked: false
    },
    {
      time: '09:15',
      booked: false
    },
    {
      time: '09:30',
      booked: false
    },
    {
      time: '09:45',
      booked: false
    },
    {
      time: '10:00',
      booked: false
    },
    {
      time: '10:15',
      booked: false
    },
    {
      time: '10:30',
      booked: false
    },
    {
      time: '10:45',
      booked: false
    },
    {
      time: '11:00',
      booked: false
    },
    {
      time: '11:15',
      booked: true
    },
    {
      time: '11:30',
      booked: true
    },
    {
      time: '11:45',
      booked: false
    },
    {
      time: '12:00',
      booked: false
    },
    {
      time: '12:15',
      booked: false
    },
    {
      time: '12:30',
      booked: false
    },
    {
      time: '12:45',
      booked: false
    },
    {
      time: '13:00',
      booked: false
    },
    {
      time: '13:15',
      booked: false
    },
    {
      time: '13:30',
      booked: true
    },
    {
      time: '13:45',
      booked: false
    },
    {
      time: '14:00',
      booked: false
    },
    {
      time: '14:15',
      booked: false
    },
    {
      time: '14:30',
      booked: false
    },
    {
      time: '14:45',
      booked: false
    },
    {
      time: '15:00',
      booked: false
    },
    {
      time: '15:15',
      booked: false
    },
    {
      time: '15:30',
      booked: false
    },
    {
      time: '15:45',
      booked: false
    },
    {
      time: '16:00',
      booked: false
    },
    {
      time: '16:15',
      booked: false
    },
    {
      time: '16:30',
      booked: false
    },
    {
      time: '16:45',
      booked: false
    },
    {
      time: '17:00',
      booked: false
    }
  ];
  // public reservations = null;
  public booked = false;

  constructor(
    private http: HttpClient,
    private roomService: RoomService) { }

  ngOnInit() {
    this.displayDate = new Date(this.displayDate).toLocaleDateString('en-US', this.options);
    this.roomService.displayDate = this.displayDate;
    this.roomService.getRooms().subscribe(res => {
      this.rooms = res.rooms;
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }
    });

    this.reservations = this.roomService.reservations;

    this.timeSlots.forEach(time => {
      let booked = false;
      this.reservations.forEach(reservation => {
        reservation.reservation.scheduleDetails.forEach(item => {
          if (time.time === item.startTime) {
            booked = true;
          } else if (time.time === item.endTime) {
            booked = false;
          }
          time.booked = booked;
        });
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'displayDate') {
        this.displayDate = new Date(this.displayDate).toLocaleDateString('en-US', this.options);
      } else if (propName === 'reservations') {

        // TODO - change this to flip it upside down
        this.reservations = this.roomService.reservations;
        this.timeSlots.forEach(time => {
          let booked = false;
          this.reservations.forEach(reservation => {
            reservation.reservation.scheduleDetails.forEach(item => {
              if (time.time === item.startTime) {
                booked = true;
              } else if (time.time === item.endTime) {
                booked = false;
              }
              time.booked = booked;
            });
          });
        });
      }
    }
  }

  collectData(event) {
    this.roomService.room = event.room;
    this.roomService.startTime = event.time;
    this.roomSelected.emit(true);
    // this.showModal = !this.showModal;
  }
}
