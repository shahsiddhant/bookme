import { Component, EventEmitter, OnInit, Output, Input, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RoomService } from '../shared/services/room.service';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { TimeslotService } from '../shared/services/timeslot.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit, OnChanges {
  @Output() roomSelected: EventEmitter<any> = new EventEmitter();
  @Input() displayDate;
  @Input() reservation;
  private options = {
    weekday: 'long', year: 'numeric', month: 'short',
    day: 'numeric'
  };


  // TODO - get these from the API
  public rooms = ['16101', '16103', '16113', '16303', '16313'];
  public timeSlots = [
    {
      data: null,
      time: '9:00',
      booked: false

    },
    {
      data: null,
      time: '9:15',
      booked: false
    },
    {
      data: null,
      time: '9:30',
      booked: false
    },
    {
      data: null,
      time: '9:45',
      booked: false
    },
    {
      data: null,
      time: '10:00',
      booked: false
    },
    {
      data: null,
      time: '10:15',
      booked: false
    },
    {
      data: null,
      time: '10:30',
      booked: false
    },
    {
      data: null,
      time: '10:45',
      booked: false
    },
    {
      data: null,
      time: '11:00',
      booked: false
    },
    {
      data: null,
      time: '11:15',
      booked: false
    },
    {
      data: null,
      time: '11:30',
      booked: false
    },
    {
      data: null,
      time: '11:45',
      booked: false
    },
    {
      data: null,
      time: '12:00',
      booked: false
    },
    {
      data: null,
      time: '12:15',
      booked: false
    },
    {
      data: null,
      time: '12:30',
      booked: false
    },
    {
      data: null,
      time: '12:45',
      booked: false
    },
    {
      data: null,
      time: '13:00',
      booked: false
    },
    {
      data: null,
      time: '13:15',
      booked: false
    },
    {
      data: null,
      time: '13:30',
      booked: false
    },
    {
      data: null,
      time: '13:45',
      booked: false
    },
    {
      data: null,
      time: '14:00',
      booked: false
    },
    {
      data: null,
      time: '14:15',
      booked: false
    },
    {
      data: null,
      time: '14:30',
      booked: false
    },
    {
      data: null,
      time: '14:45',
      booked: false
    },
    {
      data: null,
      time: '15:00',
      booked: false
    },
    {
      data: null,
      time: '15:15',
      booked: false
    },
    {
      data: null,
      time: '15:30',
      booked: false
    },
    {
      data: null,
      time: '15:45',
      booked: false
    },
    {
      data: null,
      time: '16:00',
      booked: false
    },
    {
      data: null,
      time: '16:15',
      booked: false
    },
    {
      data: null,
      time: '16:30',
      booked: false
    },
    {
      data: null,
      time: '16:45',
      booked: false
    },
    {
      data: null,
      time: '17:00',
      booked: false
    }
  ];
  // public reservations = null;
  public booked = false;

  constructor(
    private http: HttpClient,
    private roomService: RoomService,
    private timeslotService: TimeslotService) { }

  ngOnInit() {
    let booked = false;
    this.reservation.reservation.scheduleDetails.forEach(item => {
      this.timeSlots.forEach(time => {
        if (time.time === item.startTime) {
          booked = true;
        } else if (time.time === item.endTime) {
          booked = false;
        }
        if (time.booked !== true) {
          if (booked === true) {
            time['data'] = item;
          }
          time.booked = booked;
        }
      });
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'displayDate') {
        this.displayDate = new Date(this.displayDate).toLocaleDateString('en-US', this.options);
      } else if (propName === 'reservation') {

        let booked = false;
        this.reservation.reservation.scheduleDetails.forEach(item => {
          this.timeSlots.forEach(time => {
            if (time.time === item.startTime) {
              booked = true;
            } else if (time.time === item.endTime) {
              booked = false;
            }
            if (time.booked !== true) {
              if (booked === true) {
                time['data'] = item;
              }
              time.booked = booked;
            }
          });
        });
      }
    }
  }

  collectData(event) {

    this.roomService.room = event.room;
    this.roomService.startTime = event.time;
    this.timeslotService.booked = event.booked;
    this.timeslotService.id = event.id;
    this.roomSelected.emit(true);
  }
}
