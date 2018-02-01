import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';




@Component({
  selector: 'app-start-prompt',
  templateUrl: './start-prompt.component.html',
  styleUrls: ['./start-prompt.component.css']
})
export class StartPromptComponent implements OnInit {
  public firstName = null;
  public lastName = null;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  firstNameControl = new FormControl('', [Validators.required]);
  lastNameControl = new FormControl('', [Validators.required]);
  constructor(private cookieService: CookieService) { }

  ngOnInit() { }

  saveInfo() {
    if (this.firstName && this.lastName) {
      this.cookieService.put('firstName', this.firstName);
      this.cookieService.put('lastName', this.lastName);
      this.closeModal.emit(true);
    }
  }

}
