import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RoomService } from '../shared/services/room.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-display-reservation-details',
  templateUrl: './display-reservation-details.component.html',
  styleUrls: ['./display-reservation-details.component.css']
})
export class DisplayReservationDetailsComponent implements OnInit {
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  @Input() reservationDetails;
  public showErrorMessage = false;
  public errorMessage: string;
  constructor(private roomService: RoomService, private cookieService: CookieService) { }

  ngOnInit() {
  }
  modalClose() {
    this.closeModal.emit(false);
  }
  deleteReservation() {
    const cookieName = this.cookieService.get('firstName') + ' ' + this.cookieService.get('lastName');
    if (cookieName === this.reservationDetails.owner) {
      this.roomService.deleteReservation(this.reservationDetails.id).subscribe(res => {
        this.closeModal.emit(false);
      }, err => {
        this.showErrorMessage = true;
        this.errorMessage = err.error;
      });
    } else {
      this.showErrorMessage = true;
      this.errorMessage = 'You cannot delete this reservation if you are not the owner';
    }


  }
}
