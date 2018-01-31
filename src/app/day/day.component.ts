import { Component, EventEmitter, OnInit, Output, Input, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  /*
    public data = [
      {
        'day': 'Monday',
        'room': [
          {
            'name': '101',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '103',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '113',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '303',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '313',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          }
        ]
      },
      {
        'day': 'Tuesday',
        'room': [
          {
            'name': '101',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '103',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '113',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '303',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '313',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          }
        ]
      },
      {
        'day': 'Wednesday',
        'room': [
          {
            'name': '101',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '103',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '113',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '303',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '313',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          }
        ]
      },
      {
        'day': 'Thursday',
        'room': [
          {
            'name': '101',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '103',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '113',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '303',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '313',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          }
        ]
      },
      {
        'day': 'Friday',
        'room': [
          {
            'name': '101',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '103',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '113',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '303',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          },
          {
            'name': '313',
            'times': [
              {
                time: 900,
                booked: false
              },
              {
                time: 915,
                booked: false
              },
              {
                time: 930,
                booked: false
              },
              {
                time: 945,
                booked: false
              },
              {
                time: 1000,
                booked: false
              },
              {
                time: 1015,
                booked: false
              },
              {
                time: 1030,
                booked: false
              },
              {
                time: 1045,
                booked: false
              },
              {
                time: 1100,
                booked: false
              },
              {
                time: 1115,
                booked: false
              },
              {
                time: 1130,
                booked: false
              },
              {
                time: 1145,
                booked: false
              },
              {
                time: 1200,
                booked: false
              },
              {
                time: 1215,
                booked: false
              },
              {
                time: 1230,
                booked: false
              },
              {
                time: 1245,
                booked: false
              },
              {
                time: 100,
                booked: false
              },
              {
                time: 115,
                booked: false
              },
              {
                time: 130,
                booked: false
              },
              {
                time: 145,
                booked: false
              },
              {
                time: 200,
                booked: false
              },
              {
                time: 215,
                booked: false
              },
              {
                time: 230,
                booked: false
              },
              {
                time: 245,
                booked: false
              },
              {
                time: 300,
                booked: false
              },
              {
                time: 315,
                booked: false
              },
              {
                time: 330,
                booked: false
              },
              {
                time: 345,
                booked: false
              },
              {
                time: 400,
                booked: false
              },
              {
                time: 415,
                booked: false
              },
              {
                time: 430,
                booked: false
              },
              {
                time: 445,
                booked: false
              },
              {
                time: 500,
                booked: false
              }
            ]
          }
        ]
      }
    ];

    */

  @Output() roomSelected: EventEmitter<any> = new EventEmitter();
  private options = {
    weekday: 'long', year: 'numeric', month: 'short',
    day: 'numeric'
  };
  @Input() displayDate;

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
      booked: false
    },
    {
      time: '11:30',
      booked: false
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
      booked: false
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

  constructor(
    private http: HttpClient,
    private roomService: RoomService) { }

  ngOnInit() {
    this.displayDate = new Date(this.displayDate).toLocaleDateString('en-US', this.options);

    this.roomService.getRooms().subscribe( res => {
      this.rooms = res.rooms;
      console.log(this.rooms);
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'displayDate') {
        this.displayDate = new Date(this.displayDate).toLocaleDateString('en-US', this.options);
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
