import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.css']
})
export class TimeslotComponent implements OnInit {
  @Input() metaData;
  @Input() room;
  @Input() booked;
  @Output() selected: EventEmitter<any> = new EventEmitter();
  public showModal: boolean;
  constructor() { }

  ngOnInit() {
  }

  timeslotClicked() {
    // emit the metadata to the parent back to use


    const data = {
      'room': this.room,
      'time': this.metaData.time.length === 4 ? '0' + this.metaData.time : this.metaData.time,
      'booked': this.metaData.booked,
      'id': this.metaData.data ? this.metaData.data.id : null
    };
    this.selected.emit(data);

  }
}
