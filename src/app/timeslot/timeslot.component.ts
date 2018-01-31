import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.css']
})
export class TimeslotComponent implements OnInit {
  @Input() metaData;
  public showModal: boolean;
  constructor() { }

  ngOnInit() {
  }

  timeslotClicked() {
    // emit the metadata to the parent back to use

    // console.log(this.metaData);
    // this.showModal = !this.showModal;
  }

}
