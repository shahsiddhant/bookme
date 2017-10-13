import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  private data = [{
      "day": "Monday",
      "room": [
        101, 103, 113, 303, 313
      ]
    },
    {
      "day": "Tuesday",
      "room": [
        101, 103, 113, 303, 313
      ]
    },
    {
      "day": "Wednesday",
      "room": [
        101, 103, 113, 303, 313
      ]
    },
    {
      "day": "Thursday",
      "room": [
        101, 103, 113, 303, 313
      ]
    },
    {
      "day": "Friday",
      "room": [
        101, 103, 113, 303, 313
      ]
    }
  ];


  constructor() {}

  ngOnInit() {}

}
