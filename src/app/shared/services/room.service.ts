import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  postMeeting(): Observable<any> {
    const path = 'http://xmmtg-mit-a1d.sys.comcast.net:8080/reservation';
    const body = {
      'id': Math.floor(Math.random() * 1000000),
      'owner': this.cookieService.get('firstName') + ' ' + this.cookieService.get('lastName'),
      'startTime': new Date(this.date + ' ' + this.startTime).toISOString(),
      'endTime': new Date(this.date + ' ' + this.endTime).toISOString(),
      'room': this.room,
      'desc': this.desc
    };
    console.log(body);
    return this.httpClient.post(path, body);
  }

  getRooms(): Observable<any> {
    const path = 'http://xmmtg-mit-a1d.sys.comcast.net:8080/rooms';
    return this.httpClient.get(path);
  }
}
