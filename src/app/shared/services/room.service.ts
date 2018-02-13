import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Injectable()
export class RoomService {


  public owner: string = null;
  public timezone: string = null;
  public startTime: string = null;
  public endTime: string = null;
  public room: string = null;
  public desc: string = null;
  public date: string = null;
  public reservations = [];
  public displayDate;
  private baseUrl = 'http://xmmtg-mit-a1d.sys.comcast.net:8080';

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  postMeeting(): Observable<any> {
    const path = this.baseUrl + '/reservation';
    const body = {
      'id': Math.floor(Math.random() * 1000000),
      'owner': this.cookieService.get('firstName') + ' ' + this.cookieService.get('lastName'),
      'startTime': new Date(this.date + ' ' + this.startTime).toISOString(),
      'endTime': new Date(this.date + ' ' + this.endTime).toISOString(),
      'room': this.room,
      'desc': this.desc
    };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers.append('', 'text');
    return this.httpClient.post(path, body, { headers, responseType: 'text' });
  }

  getRooms(): Observable<any> {
    const path = this.baseUrl + '/rooms';
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.httpClient.get(path, { headers });
  }

  getReservationsByRoomByDate(room: string, date: string): Observable<any> {
    const path = this.baseUrl + `/schedule/${room}/date/${date}`;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.httpClient.get(path, { headers });
  }

  getReservationDetails(id): Observable<any> {
    const path = this.baseUrl + `/reservation/${id}`;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.httpClient.get(path, { headers });
  }

  deleteReservation(id): Observable<any> {
    const path = this.baseUrl + `/reservation/${id}`;
    return this.httpClient.delete(path, { responseType: 'text' });
  }
}
