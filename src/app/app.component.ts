import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

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
export class AppComponent implements OnInit {

  weekDataCol: AngularFirestoreCollection<any>;
  document: AngularFirestoreDocument<any>;
  weekData: Observable<any>;
  roomDataCol: AngularFirestoreCollection<any>;
  roomData: Observable<any>;
  testdata: Observable<any>;
  public data = ['0915', '0930', '0945', '1000', '1015', '1030', '1045', '1100', '1115', '1130', '1145', '1200', '1215', '1230',
    '1245', '1300', '1315', '1330', '1345', '1400', '1415', '1430', '1445',
    '1500', '1515', '1530', '1545', '1600', '1615', '1630', '1645', '1700'];
  constructor(private afs: AngularFirestore) { }


  ngOnInit() {
    // this.weekDataCol = this.afs.collection('week').doc('1').collection('Tuesday').doc('301').collection('times');
    // for (var i = 0; i < this.data.length; i++) {
    //   this.weekDataCol.doc(this.data[i]).set({
    //     'booked': false
    //   })
    // }
    // this.weekDataCol.doc('1315').set({
    //   'booked': true
    // })
    // this.weekData = this.weekDataCol.valueChanges();
    // this.testdata = this.document.valueChanges();
    // this.testdata.subscribe(data => {
    //   console.log('testdata', data);
    // })
    // this.weekData.subscribe(data => {
    //   console.log(data);
    // })

  }
}

