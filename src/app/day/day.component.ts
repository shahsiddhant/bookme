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

  private data = [
    {
      "day": "Monday",
      "room": [{
          101: [
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
              booked: true
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
              booked: true
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
              booked: true
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
            103: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
          113: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
          303: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
      "room": [{
          101: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
            103: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
          113: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
          303: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
      "room": [{
          101: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
            103: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
          113: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
          303: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
      "room": [{
          101: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
            103: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
          113: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
          303: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
      "room": [{
          101: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
            103: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
          113: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
          303: [
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
            },
            {
              time: 1100,
              booked: false
            },
            {
              time: 1115,
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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
              booked: true
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


  constructor() {}
    objectKeys = Object.keys;
  ngOnInit() {
    
  }

  bookSlot($event: any) {
    if ($event.target.classList.contains('booked')) {
      $event.target.classList.remove('booked');
      $event.target.data.room.booked = false;
    }
    else {
      $event.target.classList.add('booked');
      $event.target.data.room.booked = true; //this doesnt work yet - basically pseudocode
      console.log($event.target.data.room.booked);
    }
  }
}
