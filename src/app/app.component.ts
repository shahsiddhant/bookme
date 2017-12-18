import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Week {
  day: string;
}

interface Rooms {
  room: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  weekDataCol: AngularFirestoreCollection<any>;
  document: AngularFirestoreDocument<any>;
  weekData: Observable<any>;
  roomDataCol: AngularFirestoreCollection<any>;
  roomData: Observable<any>;
  testdata: Observable<any>;
  public data = [
    {
      "day": "Monday",
      "room": [
        {
          'name':'101',
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
          'name':'103',
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
          'name':'113',
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
          'name':'303',
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
          'name':'313',
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
          'name':'101',
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
          'name':'103',
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
          'name':'113',
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
          'name':'303',
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
          'name':'313',
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
          'name':'101',
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
          'name':'103',
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
          'name':'113',
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
          'name':'303',
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
          'name':'313',
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
          'name':'101',
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
          'name':'103',
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
          'name':'113',
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
          'name':'303',
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
          'name':'313',
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
          'name':'101',
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
          'name':'103',
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
          'name':'113',
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
          'name':'303',
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
          'name':'313',
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
  public singleDay = {
    "day": "Friday",
    "rooms": [
      {
        'name':'101',
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
        'name':'103',
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
        'name':'113',
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
        'name':'303',
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
        'name':'313',
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
  constructor( private afs: AngularFirestore) {}


  ngOnInit() {
    this.weekDataCol = this.afs.collection('week').doc('1').collection('Monday').doc('101').collection('times');
    // this.weekDataCol.doc('1315').set({
    //   'booked': true
    // })
    this.weekData = this.weekDataCol.valueChanges();
    // this.testdata = this.document.valueChanges();
    // this.testdata.subscribe(data => {
    //   console.log('testdata', data);
    // })
    this.weekData.subscribe(data => {
      console.log(data);
    })

  }
}

