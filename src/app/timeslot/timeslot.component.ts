import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.css']
})
export class TimeslotComponent implements OnInit {

  private timeslots = [
    {
      time: 900,
      booked: true
    },
    {
      time: 915,
      booked: false
    },
    {
      time: 930,
      booked: true
    },
    {
      time: 945,
      booked: true
    },
    {
      time: 1000,
      booked: false
    },
    {
      time: 1015,
      booked: true
    },
    {
      time: 1030,
      booked: false
    },
    {
      time: 1045,
      booked: false
    }

  ]
  constructor() { }
  ngOnInit() {
  }

}
