webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-calendar></app-calendar>\n\n<app-start-prompt (closeModal)=\"closeModal($event)\" *ngIf=\"getData\"></app-start-prompt>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(cookieService) {
        this.cookieService = cookieService;
        this.getData = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this.cookieService.get('firstName') || !this.cookieService.get('lastName')) {
            // TODO - Ask for user info.
            this.getData = true;
            // this.cookieService.put('owner', 'Sid Shah');
        }
    };
    AppComponent.prototype.closeModal = function (event) {
        this.getData = !event;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__day_day_component__ = __webpack_require__("../../../../../src/app/day/day.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__save_form_save_form_component__ = __webpack_require__("../../../../../src/app/save-form/save-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__time_axis_time_axis_component__ = __webpack_require__("../../../../../src/app/time-axis/time-axis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__timeslot_timeslot_component__ = __webpack_require__("../../../../../src/app/timeslot/timeslot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_room_service__ = __webpack_require__("../../../../../src/app/shared/services/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_timeslot_service__ = __webpack_require__("../../../../../src/app/shared/services/timeslot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__start_prompt_start_prompt_component__ = __webpack_require__("../../../../../src/app/start-prompt/start-prompt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__display_reservation_details_display_reservation_details_component__ = __webpack_require__("../../../../../src/app/display-reservation-details/display-reservation-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__day_day_component__["a" /* DayComponent */],
                __WEBPACK_IMPORTED_MODULE_7__save_form_save_form_component__["a" /* SaveFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__time_axis_time_axis_component__["a" /* TimeAxisComponent */],
                __WEBPACK_IMPORTED_MODULE_12__timeslot_timeslot_component__["a" /* TimeslotComponent */],
                __WEBPACK_IMPORTED_MODULE_16__start_prompt_start_prompt_component__["a" /* StartPromptComponent */],
                __WEBPACK_IMPORTED_MODULE_17__display_reservation_details_display_reservation_details_component__["a" /* DisplayReservationDetailsComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatDatepickerModule */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                // AngularFirestoreModule,
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatButtonModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__shared_services_room_service__["a" /* RoomService */], __WEBPACK_IMPORTED_MODULE_15_angular2_cookie_services_cookies_service__["CookieService"], __WEBPACK_IMPORTED_MODULE_14__shared_services_timeslot_service__["a" /* TimeslotService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-day {\n  width: 100%;\n  font-family: Helvetica, sans-serif;\n  font-weight: 100;\n}\n\n.left-pane {\n  width: 13%;\n  display: inline-block;\n  height: 100%;\n  padding: 30px;\n}\n\n.right-pane {\n  width: 81%;\n  display: inline-block;\n  position: absolute;\n  padding: 30px;\n}\n\n.title {\n  font-size: 25px;\n  font-family: sans-serif;\n  text-align: center;\n}\n\n.day-container {\n  width: 100%;\n  margin-top: 10px;\n}\n\n.room-container {\n  display: inline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"left-pane\">\n  <div class=\"date-input\">\n    <mat-form-field>\n      <input matInput type=\"text\" id=\"date\" placeholder=\"Date\" [matDatepicker]=\"picker\" [formControl]=\"dateControl\" placeholder=\"Choose a date\" (dateChange)=\"dateChange($event)\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n  </div>\n  <app-time-axis></app-time-axis>\n</div>\n\n<div *ngIf=\"dataLoaded\" class=\"right-pane\">\n  <div class=\"day-container\">\n    <div class=\"title\">\n      {{displayDate}}\n    </div>\n    <div class=\"room-container\" *ngFor=\"let reservation of reservations\">\n      <app-day [reservation]=\"reservation\" (roomSelected)=\"showHideModal($event)\"></app-day>\n    </div>\n  </div>\n</div>\n<app-save-form (closeModal)=\"showHideModal($event)\" *ngIf=\"showNotBookedModal\" [startTime]=\"startTime\"></app-save-form>\n<app-display-reservation-details [reservationDetails]=\"reservationDetails\" (closeModal)=\"showHideModal($event)\" *ngIf=\"showBookedModal\"></app-display-reservation-details>\n"

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_room_service__ = __webpack_require__("../../../../../src/app/shared/services/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_schedule__ = __webpack_require__("../../../../../src/app/shared/services/schedule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_timeslot_service__ = __webpack_require__("../../../../../src/app/shared/services/timeslot.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(roomService, timeslotService) {
        this.roomService = roomService;
        this.timeslotService = timeslotService;
        this.date = new Date();
        this.startTime = null;
        this.displayDate = null;
        // Get this from API
        this.rooms = ['16101', '16103', '16113', '16303', '16313', '16400', '16401'];
        this.reservations = null;
        this.dataLoaded = false;
        this.options = {
            weekday: 'long', year: 'numeric', month: 'short',
            day: 'numeric'
        };
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.roomService.date = this.date.getFullYear() + '-' + ((this.date.getMonth() + 1) < 10 ? '0' : '') +
            (this.date.getMonth() + 1) + '-' + ((this.date.getDate() + 1) < 10 ? '0' : '') + this.date.getDate();
        this.dateControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.date);
        this.displayDate = this.date;
        this.displayDate = new Date(this.displayDate).toLocaleDateString('en-US', this.options);
        this.roomService.displayDate = this.displayDate;
        this.updateReservations();
    };
    CalendarComponent.prototype.dateChange = function (event) {
        // event.value shows the date, now get the say and then display the day.
        this.displayDate = event.value;
        this.displayDate = new Date(this.displayDate).toLocaleDateString('en-US', this.options);
        this.roomService.displayDate = this.displayDate;
        this.roomService.date = event.value.getFullYear() + '-' + ((event.value.getMonth() + 1) < 10 ? '0' : '') +
            (event.value.getMonth() + 1) + '-' + ((event.value.getDate() + 1) < 10 ? '0' : '') + event.value.getDate();
        this.updateReservations();
        // Then populate the meeting for that day.
    };
    CalendarComponent.prototype.showHideModal = function (event) {
        var _this = this;
        if (this.timeslotService.booked) {
            // Make API call to get reservation details
            if (event === true) {
                this.roomService.getReservationDetails(this.timeslotService.id).subscribe(function (res) {
                    _this.reservationDetails = res;
                    _this.showBookedModal = event;
                });
            }
            else {
                this.updateReservations();
                this.showBookedModal = event;
            }
        }
        else {
            if (event !== true) {
                this.updateReservations();
            }
            this.showNotBookedModal = event;
        }
        this.startTime = this.roomService.startTime;
    };
    CalendarComponent.prototype.updateReservations = function () {
        var _this = this;
        this.reservations = [];
        this.rooms.forEach(function (room) {
            _this.roomService.getReservationsByRoomByDate(room, _this.roomService.date).subscribe(function (res) {
                _this.reservation = new __WEBPACK_IMPORTED_MODULE_4__shared_services_schedule__["a" /* Schedule */](res);
                _this.reservations.push({
                    'room': parseInt(room, 10),
                    'reservation': _this.reservation
                });
                _this.roomService.reservations.push({
                    'room': parseInt(room, 10),
                    'reservation': _this.reservation
                });
                if (_this.reservations.length === _this.rooms.length) {
                    _this.reservations.sort(function (a, b) {
                        return a.room - b.room;
                    });
                    _this.dataLoaded = true;
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_datepicker__["a" /* MatDatepicker */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material_datepicker__["a" /* MatDatepicker */])
    ], CalendarComponent.prototype, "datepicker", void 0);
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__("../../../../../src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_room_service__["a" /* RoomService */], __WEBPACK_IMPORTED_MODULE_5__shared_services_timeslot_service__["a" /* TimeslotService */]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/day/day.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".room-coloumn {\n  /* background: red; */\n  text-align: center;\n  display: inline-block;\n  width: 11%;\n  padding: 10px;\n  border-right: 1px solid #eeeeee;\n  height: 100%;\n  font-size: 14px;\n}\n\n.timeslot {\n  width: 100%;\n  height: 50px;\n  margin-bottom: 10px;\n  background-color: #DDDDDD;\n  border-bottom: 1px solid #ccc;\n  font-size: 10px\n}\n\n.timeslot:hover {\n  opacity: .8;\n}\n\n.booked {\n  background: #6A8EFE;\n}\n\n.room-number {\n  font-size: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day/day.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"room-coloumn\">\n  <span class=\"room-number\">Room {{reservation.room}}</span>\n  <div class=\"timeslot\" *ngFor=\"let timeslot of timeSlots\">\n    <app-timeslot [booked]='timeslot.booked' (selected)=\"collectData($event)\" [room]=\"reservation.room\" [metaData]=\"timeslot\"></app-timeslot>\n  </div>\n  <span class=\"room-number\">Room {{reservation.room}}</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/day/day.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_room_service__ = __webpack_require__("../../../../../src/app/shared/services/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_timeslot_service__ = __webpack_require__("../../../../../src/app/shared/services/timeslot.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DayComponent = /** @class */ (function () {
    function DayComponent(http, roomService, timeslotService) {
        this.http = http;
        this.roomService = roomService;
        this.timeslotService = timeslotService;
        this.roomSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = {
            weekday: 'long', year: 'numeric', month: 'short',
            day: 'numeric'
        };
        // TODO - get these from the API
        this.rooms = ['16101', '16103', '16113', '16303', '16313'];
        this.timeSlots = [
            {
                data: null,
                time: '7:00',
                booked: false
            },
            {
                data: null,
                time: '7:15',
                booked: false
            },
            {
                data: null,
                time: '7:30',
                booked: false
            },
            {
                data: null,
                time: '7:45',
                booked: false
            },
            {
                data: null,
                time: '8:00',
                booked: false
            },
            {
                data: null,
                time: '8:15',
                booked: false
            },
            {
                data: null,
                time: '8:30',
                booked: false
            },
            {
                data: null,
                time: '8:45',
                booked: false
            },
            {
                data: null,
                time: '9:00',
                booked: false
            },
            {
                data: null,
                time: '9:15',
                booked: false
            },
            {
                data: null,
                time: '9:30',
                booked: false
            },
            {
                data: null,
                time: '9:45',
                booked: false
            },
            {
                data: null,
                time: '10:00',
                booked: false
            },
            {
                data: null,
                time: '10:15',
                booked: false
            },
            {
                data: null,
                time: '10:30',
                booked: false
            },
            {
                data: null,
                time: '10:45',
                booked: false
            },
            {
                data: null,
                time: '11:00',
                booked: false
            },
            {
                data: null,
                time: '11:15',
                booked: false
            },
            {
                data: null,
                time: '11:30',
                booked: false
            },
            {
                data: null,
                time: '11:45',
                booked: false
            },
            {
                data: null,
                time: '12:00',
                booked: false
            },
            {
                data: null,
                time: '12:15',
                booked: false
            },
            {
                data: null,
                time: '12:30',
                booked: false
            },
            {
                data: null,
                time: '12:45',
                booked: false
            },
            {
                data: null,
                time: '13:00',
                booked: false
            },
            {
                data: null,
                time: '13:15',
                booked: false
            },
            {
                data: null,
                time: '13:30',
                booked: false
            },
            {
                data: null,
                time: '13:45',
                booked: false
            },
            {
                data: null,
                time: '14:00',
                booked: false
            },
            {
                data: null,
                time: '14:15',
                booked: false
            },
            {
                data: null,
                time: '14:30',
                booked: false
            },
            {
                data: null,
                time: '14:45',
                booked: false
            },
            {
                data: null,
                time: '15:00',
                booked: false
            },
            {
                data: null,
                time: '15:15',
                booked: false
            },
            {
                data: null,
                time: '15:30',
                booked: false
            },
            {
                data: null,
                time: '15:45',
                booked: false
            },
            {
                data: null,
                time: '16:00',
                booked: false
            },
            {
                data: null,
                time: '16:15',
                booked: false
            },
            {
                data: null,
                time: '16:30',
                booked: false
            },
            {
                data: null,
                time: '16:45',
                booked: false
            },
            {
                data: null,
                time: '17:00',
                booked: false
            },
            {
                data: null,
                time: '17:15',
                booked: false
            },
            {
                data: null,
                time: '17:30',
                booked: false
            },
            {
                data: null,
                time: '17:45',
                booked: false
            },
            {
                data: null,
                time: '18:00',
                booked: false
            },
            {
                data: null,
                time: '18:15',
                booked: false
            },
            {
                data: null,
                time: '18:30',
                booked: false
            },
            {
                data: null,
                time: '18:45',
                booked: false
            }
        ];
        // public reservations = null;
        this.booked = false;
    }
    DayComponent.prototype.ngOnInit = function () {
        var _this = this;
        var booked = false;
        this.reservation.reservation.scheduleDetails.forEach(function (item) {
            _this.timeSlots.forEach(function (time) {
                if (time.time === item.startTime) {
                    booked = true;
                }
                else if (time.time === item.endTime) {
                    booked = false;
                }
                if (time.booked !== true) {
                    if (booked === true) {
                        time['data'] = item;
                    }
                    time.booked = booked;
                }
            });
        });
    };
    DayComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var _loop_1 = function (propName) {
            if (propName === 'displayDate') {
                this_1.displayDate = new Date(this_1.displayDate).toLocaleDateString('en-US', this_1.options);
            }
            else if (propName === 'reservation') {
                var booked_1 = false;
                this_1.reservation.reservation.scheduleDetails.forEach(function (item) {
                    _this.timeSlots.forEach(function (time) {
                        if (time.time === item.startTime) {
                            booked_1 = true;
                        }
                        else if (time.time === item.endTime) {
                            booked_1 = false;
                        }
                        if (time.booked !== true) {
                            if (booked_1 === true) {
                                time['data'] = item;
                            }
                            time.booked = booked_1;
                        }
                    });
                });
            }
        };
        var this_1 = this;
        for (var propName in changes) {
            _loop_1(propName);
        }
    };
    DayComponent.prototype.collectData = function (event) {
        this.roomService.room = event.room;
        this.roomService.startTime = event.time;
        this.timeslotService.booked = event.booked;
        this.timeslotService.id = event.id;
        this.roomSelected.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DayComponent.prototype, "roomSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DayComponent.prototype, "displayDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DayComponent.prototype, "reservation", void 0);
    DayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-day',
            template: __webpack_require__("../../../../../src/app/day/day.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day/day.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_room_service__["a" /* RoomService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_timeslot_service__["a" /* TimeslotService */]])
    ], DayComponent);
    return DayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/display-reservation-details/display-reservation-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-container,\n.delete-confirmation {\n  font-family: sans-serif;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(50, 50, 50, 0.7);\n}\n\n.modal,\n.question {\n  margin: 30vh auto;\n  width: 400px;\n  border-radius: 5px;\n  padding: 30px;\n  background: #f9f9f9;\n}\n\n.close {\n  width: 100%;\n  text-align: right;\n  cursor: pointer;\n}\n\n.delete,\n.yes {\n  background: none;\n  background-color: red;\n  color: #fff;\n  border: 0;\n  border-radius: 30px;\n  font-size: 15px;\n  padding: 10px 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.delete:hover,\n.yes:hover {\n  background-color: #c60000;\n  cursor: pointer;\n}\n\n.no {\n  background: none;\n  background-color: green;\n  color: #fff;\n  border: 0;\n  border-radius: 30px;\n  font-size: 15px;\n  padding: 10px 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.no:hover {\n  background-color: darkgreen;\n  cursor: pointer;\n}\n\n.description {\n  margin: 10px 0;\n}\n\n.error-message {\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/display-reservation-details/display-reservation-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-container\">\n  <div class=\"modal\">\n    <div class=\"close\" (click)=\"modalClose()\">X</div>\n\n    <div class=\"description\">\n      <div class=\"owner\">Owner:\n        <strong> {{reservationDetails.owner}} </strong>\n      </div>\n      <div> Room:\n        <strong>{{reservationDetails.room}}</strong>\n      </div>\n      <div> Description\n        <strong> {{reservationDetails.desc}}</strong>\n      </div>\n    </div>\n\n    <div class=\"date\">\n      <div>{{reservationDetails.startTime | date:'fullDate'}}</div>\n      <div>{{reservationDetails.startTime | date:'shortTime'}} - {{reservationDetails.endTime | date:'shortTime'}}</div>\n    </div>\n\n    <button class=\"delete\" (click)=\"showConfirmationModal()\">Delete</button>\n    <div class=\"error-message\" *ngIf=\"showErrorMessage\">\n      Error occoured, Please try again:\n      <strong> {{errorMessage}}</strong>\n    </div>\n\n    <div class=\"delete-confirmation\" *ngIf=\"showConfirmation\">\n      <div class=\"question\">\n        <div> Are you sure you want to delete this reservation?</div>\n        <button class=\"yes\" (click)=\"deleteReservation()\">Yes</button>\n        <button class=\"no\" (click)=\"closeConfirmation()\">No</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/display-reservation-details/display-reservation-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayReservationDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_room_service__ = __webpack_require__("../../../../../src/app/shared/services/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayReservationDetailsComponent = /** @class */ (function () {
    function DisplayReservationDetailsComponent(roomService, cookieService) {
        this.roomService = roomService;
        this.cookieService = cookieService;
        this.closeModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showConfirmation = false;
        this.showErrorMessage = false;
    }
    DisplayReservationDetailsComponent.prototype.ngOnInit = function () {
    };
    DisplayReservationDetailsComponent.prototype.modalClose = function () {
        this.closeModal.emit(false);
    };
    DisplayReservationDetailsComponent.prototype.showConfirmationModal = function () {
        var cookieName = this.cookieService.get('firstName') + ' ' + this.cookieService.get('lastName');
        if (cookieName === this.reservationDetails.owner) {
            this.showConfirmation = true;
        }
        else {
            this.showErrorMessage = true;
            this.errorMessage = 'You cannot delete this reservation if you are not the owner';
        }
    };
    DisplayReservationDetailsComponent.prototype.deleteReservation = function () {
        var _this = this;
        this.roomService.deleteReservation(this.reservationDetails.id).subscribe(function (res) {
            _this.closeModal.emit(false);
        }, function (err) {
            _this.showErrorMessage = true;
            _this.errorMessage = err.error;
        });
    };
    DisplayReservationDetailsComponent.prototype.closeConfirmation = function () {
        this.showConfirmation = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DisplayReservationDetailsComponent.prototype, "closeModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DisplayReservationDetailsComponent.prototype, "reservationDetails", void 0);
    DisplayReservationDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-display-reservation-details',
            template: __webpack_require__("../../../../../src/app/display-reservation-details/display-reservation-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/display-reservation-details/display-reservation-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_room_service__["a" /* RoomService */], __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]])
    ], DisplayReservationDetailsComponent);
    return DisplayReservationDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/save-form/save-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".save-modal {\n  font-family: sans-serif;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(50, 50, 50, 0.7);\n}\n\n.form-container {\n  margin: 30vh auto;\n  width: 400px;\n  border-radius: 5px;\n  padding: 30px;\n  background: #f9f9f9;\n}\n\n.save {\n  background: none;\n  background-color: #4F9DFB;\n  color: #fff;\n  border: 0;\n  border-radius: 30px;\n  font-size: 15px;\n  padding: 10px 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.save:hover {\n  background-color: #2185ff;\n  cursor: pointer;\n}\n\n.time-selectors {\n    display: inline-block;\n}\n\n.close {\n  width: 100%;\n  text-align: right;\n  cursor: pointer;\n}\n\n.error-message {\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/save-form/save-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"save-modal\">\n  <div class=\"form-container\">\n    <div class=\"close\" (click)=\"modalClose()\">X</div>\n    <h3 class=\"m-0\">Book meeting for Room {{room}} on</h3>\n    <h2 class=\"m-0\"> {{displayDate}}</h2>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Description\" [(ngModel)]=\"desc\" [formControl]=\"descriptionControl\" required>\n      <mat-error *ngIf=\"descriptionControl.hasError('required')\">You must enter something</mat-error>\n    </mat-form-field>\n\n    <div class=\"time-selectors\">\n      <mat-form-field>\n        <mat-select placeholder=\"Start Time\" [(ngModel)]=\"startTime\" [formControl]=\"startControl\" required>\n          <mat-option *ngFor=\"let time of timeSlots\" [value]=\"time.time\">\n            {{ time.time }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"startControl.hasError('required')\">You must make a selection</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-select placeholder=\"End Time\" [formControl]=\"endControl\" [(ngModel)]=\"endTime\" required>\n          <mat-option *ngFor=\"let time of timeSlots\" [value]=\"time.time\">\n            {{ time.time }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"endControl.hasError('required')\">You must make a selection</mat-error>\n      </mat-form-field>\n    </div>\n    <button class=\"save\" (click)=\"saveInfo()\">Save</button>\n    <div class=\"error-message\" *ngIf=\"showErrorMessage\">\n      Error occoured, Please try again: {{errorMessage}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/save-form/save-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_room_service__ = __webpack_require__("../../../../../src/app/shared/services/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SaveFormComponent = /** @class */ (function () {
    function SaveFormComponent(roomService) {
        this.roomService = roomService;
        this.closeModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.endTime = null;
        this.timeSlots = [
            {
                time: '07:00'
            },
            {
                time: '07:15'
            },
            {
                time: '07:30'
            },
            {
                time: '07:45'
            },
            {
                time: '08:00'
            },
            {
                time: '08:15'
            },
            {
                time: '08:30'
            },
            {
                time: '08:45'
            },
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
            },
            {
                time: '17:15'
            },
            {
                time: '17:30'
            },
            {
                time: '17:45'
            },
            {
                time: '18:00'
            },
            {
                time: '18:15'
            },
            {
                time: '18:30'
            },
            {
                time: '18:45'
            }
        ];
        this.desc = null;
        this.errorMessage = null;
        this.showErrorMessage = false;
        this.descriptionControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]);
        this.startControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]);
        this.endControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]);
    }
    SaveFormComponent.prototype.ngOnInit = function () {
        this.endTime = this.startTime;
        this.displayDate = this.roomService.displayDate;
        this.room = this.roomService.room;
    };
    SaveFormComponent.prototype.modalClose = function () {
        this.closeModal.emit(false);
    };
    SaveFormComponent.prototype.saveInfo = function () {
        var _this = this;
        this.showErrorMessage = false;
        this.roomService.desc = this.desc;
        this.roomService.endTime = this.endTime;
        this.roomService.startTime = this.startTime;
        this.roomService.postMeeting().subscribe(function (res) {
            _this.closeModal.emit(false);
        }, function (err) {
            _this.showErrorMessage = true;
            _this.errorMessage = err.error;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SaveFormComponent.prototype, "closeModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SaveFormComponent.prototype, "startTime", void 0);
    SaveFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-save-form',
            template: __webpack_require__("../../../../../src/app/save-form/save-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/save-form/save-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_room_service__["a" /* RoomService */]])
    ], SaveFormComponent);
    return SaveFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/room.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomService = /** @class */ (function () {
    function RoomService(httpClient, cookieService) {
        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.owner = null;
        this.timezone = null;
        this.startTime = null;
        this.endTime = null;
        this.room = null;
        this.desc = null;
        this.date = null;
        this.reservations = [];
        this.baseUrl = 'http://xmmtg-mit-a1d.sys.comcast.net:8080';
    }
    RoomService.prototype.postMeeting = function () {
        var path = this.baseUrl + '/reservation';
        var body = {
            'id': Math.floor(Math.random() * 1000000),
            'owner': this.cookieService.get('firstName') + ' ' + this.cookieService.get('lastName'),
            'startTime': new Date(this.date + ' ' + this.startTime).toISOString(),
            'endTime': new Date(this.date + ' ' + this.endTime).toISOString(),
            'room': this.room.toString(),
            'desc': this.desc
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        headers.append('', 'text');
        return this.httpClient.post(path, body, { headers: headers, responseType: 'text' });
    };
    RoomService.prototype.getRooms = function () {
        var path = this.baseUrl + '/rooms';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Accept', 'application/json');
        return this.httpClient.get(path, { headers: headers });
    };
    RoomService.prototype.getReservationsByRoomByDate = function (room, date) {
        var path = this.baseUrl + ("/schedule/" + room + "/date/" + date);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Accept', 'application/json');
        return this.httpClient.get(path, { headers: headers });
    };
    RoomService.prototype.getReservationDetails = function (id) {
        var path = this.baseUrl + ("/reservation/" + id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Accept', 'application/json');
        return this.httpClient.get(path, { headers: headers });
    };
    RoomService.prototype.deleteReservation = function (id) {
        var path = this.baseUrl + ("/reservation/" + id);
        return this.httpClient.delete(path, { responseType: 'text' });
    };
    RoomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/schedule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Schedule; });
var Schedule = /** @class */ (function () {
    function Schedule(sourceObject) {
        var _this = this;
        this.schedule = [];
        this.scheduleDetails = [];
        this.room = sourceObject['room'];
        this.date = sourceObject['date'];
        this.schedule = sourceObject['schedule'];
        sourceObject['scheduleDetails'].forEach(function (element) {
            var endHours = new Date(element.endTime).getHours();
            var endMinutes = new Date(element.endTime).getMinutes();
            var endTime = endHours + ((endMinutes < 10) ? ':0' : ':') + endMinutes;
            var startHours = new Date(element.startTime).getHours();
            var startMinutes = new Date(element.startTime).getMinutes();
            var startTime = startHours + ((startMinutes < 10) ? ':0' : ':') + startMinutes;
            var tempSchedule = {
                'desc': element.desc,
                'endTime': endTime,
                'id': element.id,
                'owner': element.owner,
                'room': element.room,
                'startTime': startTime
            };
            _this.scheduleDetails.push(tempSchedule);
        });
    }
    return Schedule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/timeslot.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeslotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeslotService = /** @class */ (function () {
    function TimeslotService() {
        this.id = null;
    }
    TimeslotService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TimeslotService);
    return TimeslotService;
}());



/***/ }),

/***/ "../../../../../src/app/start-prompt/start-prompt.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-container {\n  font-family: sans-serif;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(50, 50, 50, 0.7);\n}\n\n.modal {\n  margin: 30vh auto;\n  width: 400px;\n  border-radius: 5px;\n  padding: 30px;\n  background: #f9f9f9;\n}\n\n.save {\n  background: none;\n  background-color: #4F9DFB;\n  color: #fff;\n  border: 0;\n  border-radius: 30px;\n  font-size: 15px;\n  padding: 10px 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.inline {\n  display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/start-prompt/start-prompt.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-container\">\n  <div class=\"modal\">\n    <h1>Welcome to BookMe!</h1>\n    <h2>Please enter your name. </h2>\n    <p>This will be stored in a cookie and used for all future reservations.</p>\n    <form action=\"\">\n      <div class=\"inline\">\n        <mat-form-field>\n          <input matInput type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"firstName\" [formControl]=\"firstNameControl\" required>\n          <mat-error *ngIf=\"firstNameControl.hasError('required')\">You must enter something</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"lastName\" [formControl]=\"lastNameControl\" required>\n          <mat-error *ngIf=\"lastNameControl.hasError('required')\">You must enter something</mat-error>\n        </mat-form-field>\n      </div>\n\n      <button type=\"submit\" value=\"Save\" class=\"save\" (click)=\"saveInfo()\">Save</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/start-prompt/start-prompt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPromptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartPromptComponent = /** @class */ (function () {
    function StartPromptComponent(cookieService) {
        this.cookieService = cookieService;
        this.firstName = null;
        this.lastName = null;
        this.closeModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.firstNameControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.lastNameControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
    }
    StartPromptComponent.prototype.ngOnInit = function () { };
    StartPromptComponent.prototype.saveInfo = function () {
        if (this.firstName && this.lastName) {
            this.cookieService.put('firstName', this.firstName);
            this.cookieService.put('lastName', this.lastName);
            this.closeModal.emit(true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], StartPromptComponent.prototype, "closeModal", void 0);
    StartPromptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-start-prompt',
            template: __webpack_require__("../../../../../src/app/start-prompt/start-prompt.component.html"),
            styles: [__webpack_require__("../../../../../src/app/start-prompt/start-prompt.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]])
    ], StartPromptComponent);
    return StartPromptComponent;
}());



/***/ }),

/***/ "../../../../../src/app/time-axis/time-axis.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".time-axis {\n    width: 100%;\n    display: inline-block;\n}\n.time-stamp {\n    height: 60px;\n    /* padding: 20px 0; */\n    margin: auto 0;\n    width: 100%;\n    border-bottom: 1px solid #cccccc;\n}\n.hour {\n    border-top: 1px solid #333;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/time-axis/time-axis.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"time-axis\">\n  <div class=\"time-stamp hour\">7:00</div>\n  <div class=\"time-stamp\">7:15</div>\n  <div class=\"time-stamp\">7:30</div>\n  <div class=\"time-stamp\">7:45</div>\n  <div class=\"time-stamp hour\">8:00</div>\n  <div class=\"time-stamp\">8:15</div>\n  <div class=\"time-stamp\">8:30</div>\n  <div class=\"time-stamp\">8:45</div>\n  <div class=\"time-stamp hour\">9:00</div>\n  <div class=\"time-stamp\">9:15</div>\n  <div class=\"time-stamp\">9:30</div>\n  <div class=\"time-stamp\">9:45</div>\n  <div class=\"time-stamp hour\">10:00</div>\n  <div class=\"time-stamp\">10:15</div>\n  <div class=\"time-stamp\">10:30</div>\n  <div class=\"time-stamp\">10:45</div>\n  <div class=\"time-stamp hour\">11:00</div>\n  <div class=\"time-stamp\">11:15</div>\n  <div class=\"time-stamp\">11:30</div>\n  <div class=\"time-stamp\">11:45</div>\n  <div class=\"time-stamp hour\">12:00</div>\n  <div class=\"time-stamp\">12:15</div>\n  <div class=\"time-stamp\">12:30</div>\n  <div class=\"time-stamp\">12:45</div>\n  <div class=\"time-stamp hour\">1:00</div>\n  <div class=\"time-stamp\">1:15</div>\n  <div class=\"time-stamp\">1:30</div>\n  <div class=\"time-stamp\">1:45</div>\n  <div class=\"time-stamp hour\">2:00</div>\n  <div class=\"time-stamp\">2:15</div>\n  <div class=\"time-stamp\">2:30</div>\n  <div class=\"time-stamp\">2:45</div>\n  <div class=\"time-stamp hour\">3:00</div>\n  <div class=\"time-stamp\">3:15</div>\n  <div class=\"time-stamp\">3:30</div>\n  <div class=\"time-stamp\">3:45</div>\n  <div class=\"time-stamp hour\">4:00</div>\n  <div class=\"time-stamp\">4:15</div>\n  <div class=\"time-stamp\">4:30</div>\n  <div class=\"time-stamp\">4:45</div>\n  <div class=\"time-stamp hour\">5:00</div>\n  <div class=\"time-stamp\">5:15</div>\n  <div class=\"time-stamp\">5:30</div>\n  <div class=\"time-stamp\">5:45</div>\n  <div class=\"time-stamp hour\">6:00</div>\n  <div class=\"time-stamp\">6:15</div>\n  <div class=\"time-stamp\">6:30</div>\n  <div class=\"time-stamp\">6:45</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/time-axis/time-axis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeAxisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeAxisComponent = /** @class */ (function () {
    function TimeAxisComponent() {
    }
    TimeAxisComponent.prototype.ngOnInit = function () {
    };
    TimeAxisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-time-axis',
            template: __webpack_require__("../../../../../src/app/time-axis/time-axis.component.html"),
            styles: [__webpack_require__("../../../../../src/app/time-axis/time-axis.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimeAxisComponent);
    return TimeAxisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timeslot/timeslot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeslot-grey {\n  height: 100%;\n  /* margin-top: 10px; */\n  background-color: #DDDDDD;\n  /* border: 1px solid #ccc; */\n  text-align: left;\n}\n\n.booked {\n  background-color: lightblue;\n}\n\n.elipsis {\n  text-overflow: ellipsis;\n  /* Required for text-overflow to do anything */\n  white-space: nowrap;\n  overflow: hidden;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeslot/timeslot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"timeslot-grey\" [ngClass]=\"{booked: booked}\" (click)='timeslotClicked()'>\n  {{metaData.time}}\n  <div *ngIf=\"metaData.data\"><strong>{{metaData.data.owner}}</strong></div>\n  <div class=\"elipsis\" *ngIf=\"metaData.data\">{{metaData.data.desc}}</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/timeslot/timeslot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeslotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeslotComponent = /** @class */ (function () {
    function TimeslotComponent() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TimeslotComponent.prototype.ngOnInit = function () {
    };
    TimeslotComponent.prototype.timeslotClicked = function () {
        // emit the metadata to the parent back to use
        var data = {
            'room': this.room,
            'time': this.metaData.time.length === 4 ? '0' + this.metaData.time : this.metaData.time,
            'booked': this.metaData.booked,
            'id': this.metaData.data ? this.metaData.data.id : null
        };
        this.selected.emit(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimeslotComponent.prototype, "metaData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimeslotComponent.prototype, "room", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimeslotComponent.prototype, "booked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TimeslotComponent.prototype, "selected", void 0);
    TimeslotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timeslot',
            template: __webpack_require__("../../../../../src/app/timeslot/timeslot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeslot/timeslot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimeslotComponent);
    return TimeslotComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map