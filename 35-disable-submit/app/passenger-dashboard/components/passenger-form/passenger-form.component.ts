import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

import { Baggage } from "../../models/baggage.interface";

@Component({
    selector: 'passenger-form',
    styleUrls:['passenger-form.component.scss'],
    template:
    `
        <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
            <div>
                <label>
                    Passenger Name: 
                </label>
                <input 
                    type="text"
                    name="fullname" 
                    required 
                    #fullname="ngModel"
                    [ngModel]="detail?.fullname">   
                <div class="error" *ngIf="fullname.errors?.required && fullname.dirty">
                    Passenger name is required
                </div>
            </div>

            <div>
                <label>
                    Passenger ID: 
                </label>
                <input 
                    type="text"
                    name="id"
                    required
                    #id="ngModel"
                    [ngModel]="detail?.id">
            </div>
            <div class="error" *ngIf="id.errors?.required && id.dirty">
                Passenger ID is required
            </div>

            <div>
                <label>
                    Checked In: 
                </label>
                <label>
                <input
                    type="checkbox"
                    name="checkedIn"
                    [ngModel]="detail?.checkedIn"
                    (ngModelChange)="toggleCheckIn($event)">
                </label>
            </div>

            <div *ngIf="form.value.checkedIn">
                Check in date:
                <input
                    type="number"
                    name="checkInDate"
                    [ngModel]="detail?.checkInDate">
            </div>

            <div>
                Luggage:
                <select
                    name="baggage"
                    [ngModel]="detail?.baggage">
                    <option
                        *ngFor="let item of baggage"
                        [value]="item.key"
                        [selected]="item.key === detail?.baggage">
                        {{ item.value }}

                </select>
            </div>

            <button type="submit" [disabled]="form.invalid">
                Update
            </button>
        </form>
    `
})

export class PassengerFormComponent {

    @Input()
    detail: Passenger;

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    baggage: Baggage[] = [{
        key: 'none',
        value: 'No Baggage'
    }, {
        key: 'hand-only',
        value: 'Hand Baggage'
    },{
        key: 'hold-only',
        value: 'Hold Baggage'
    },{
        key: 'hand-hold',
        value: 'Hand and Hold Baggage'
    }];

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.detail.checkInDate = Date.now();
        }
    }

    handleSubmit(passenger: Passenger, isValid: boolean) {
        if (isValid) {
            this.update.emit(passenger);
        }
    }
}