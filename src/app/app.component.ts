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
  weekData: Observable<any>;
  roomDataCol: AngularFirestoreCollection<any>;
  roomData: Observable<any>;

  constructor( private afs: AngularFirestore) {}


  ngOnInit() {
    this.weekDataCol = this.afs.collection('week');
    this.weekData = this.weekDataCol.valueChanges();
    this.roomDataCol = this.afs.collection('week').doc('kSHNU9B3aJDZXxQhddi3').collection('rooms');
    this.roomData = this.roomDataCol.valueChanges();
  }
}

