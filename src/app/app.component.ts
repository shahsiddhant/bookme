import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private afs: AngularFirestore) {}
  weekDataCol: AngularFirestoreCollection<any>;

  weekData: Observable<any>;

  ngOnInit() {
    this.weekDataCol = this.afs.collection('sidtest');

    this.weekData = this.weekDataCol.valueChanges();


  }
}

