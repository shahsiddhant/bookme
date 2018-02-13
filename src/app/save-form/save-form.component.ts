import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { RoomService } from '../shared/services/room.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css']
})
export class SaveFormComponent implements OnInit {
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  @Input() startTime;
  public endTime = null;
  public timeSlots = [
    {
      time: '09:00'
    },
    {
      time: '09:15'
    },
    {
      time: '09:30'
    },
    {
      time: '09:45'
    },
    {
      time: '10:00'
    },
    {
      time: '10:15'
    },
    {
      time: '10:30'
    },
    {
      time: '10:45'
    },
    {
      time: '11:00'
    },
    {
      time: '11:15'
    },
    {
      time: '11:30'
    },
    {
      time: '11:45'
    },
    {
      time: '12:00'
    },
    {
      time: '12:15'
    },
    {
      time: '12:30'
    },
    {
      time: '12:45'
    },
    {
      time: '13:00'
    },
    {
      time: '13:15'
    },
    {
      time: '13:30'
    },
    {
      time: '13:45'
    },
    {
      time: '14:00'
    },
    {
      time: '14:15'
    },
    {
      time: '14:30'
    },
    {
      time: '14:45'
    },
    {
      time: '15:00'
    },
    {
      time: '15:15'
    },
    {
      time: '15:30'
    },
    {
      time: '15:45'
    },
    {
      time: '16:00'
    },
    {
      time: '16:15'
    },
    {
      time: '16:30'
    },
    {
      time: '16:45'
    },
    {
      time: '17:00'

    }
  ];
  public desc: string = null;
  public displayDate;
  public errorMessage = null;
  public showErrorMessage = false;

  descriptionControl = new FormControl('', [Validators.required]);
  startControl = new FormControl('', [Validators.required]);
  endControl = new FormControl('', [Validators.required]);

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.endTime = this.startTime;
    this.displayDate = this.roomService.displayDate;
  }
  modalClose() {
    this.closeModal.emit(false);
  }

  saveInfo() {
    this.showErrorMessage = false;
    this.roomService.desc = this.desc;
    this.roomService.endTime = this.endTime;
    this.roomService.startTime = this.startTime;
    this.roomService.postMeeting().subscribe(res => {

      this.closeModal.emit(false);
    }, err => {

      this.showErrorMessage = true;
      this.errorMessage = err.error;
    });
  }
}
