import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  public data = [
    {
      "day": "Monday",
      "room": [
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
      "day": "Tuesday",
      "room": [
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
      "day": "Wednesday",
      "room": [
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
      "day": "Thursday",
      "room": [
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
      "day": "Friday",
      "room": [
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
  timesCol: AngularFirestoreCollection<any>;

  timesObs: Observable<any>;
  public timesData;


  constructor(private afs: AngularFirestore, private http: HttpClient) { }
  objectKeys = Object.keys;
  ngOnInit() {
    this.timesCol = this.afs.collection('week').doc('1').collection('Tuesday').doc('301').collection('times');
    this.timesObs = this.timesCol.valueChanges();
    this.timesObs.subscribe(data => {
      // this.timesData = data;
      // console.log(data);
    })

    this.getData().subscribe(res => {
      console.log('res', res);
    })

  }

  getData(): Observable<any> {
    return this.http.get('https://firestore.googleapis.com/v1beta1/projects/bookme-11e75/databases/(default)/documents/week/1/Monday/101/times/0900');
  }

  bookSlot($event: any, i: any) {
    if ($event.target.classList.contains('booked')) {
      $event.target.classList.remove('booked');
      console.log(i);
      console.log($event.target.attributes[4].value);
      console.log($event.target.attributes[5].value);
      // console.log($event.target.attributes[6].value);
    }
    else {
      $event.target.classList.add('booked');
      console.log(i);
      console.log($event.target.attributes[4].value);
      console.log($event.target.attributes[5].value);
      // console.log($event.target.attributes[6].value);
    }
  }
}
