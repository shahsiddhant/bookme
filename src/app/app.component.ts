import { Component } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public getData = false;
  constructor(private cookieService: CookieService) { }
  ngOnInit() {
    if (!this.cookieService.get('firstName') || !this.cookieService.get('lastName') ) {
      // TODO - Ask for user info.
      this.getData = true;
      // this.cookieService.put('owner', 'Sid Shah');
    }
  }

  closeModal(event) {
    this.getData = !event;
  }
}

