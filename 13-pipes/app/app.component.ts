import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <div>
        <ul>
          <li *ngFor="let passenger of passengers, let i = index">
            <span 
              class="status"
              [class.checked-in]="passenger.checkedIn"
            ></span>  
          {{ i }}: {{ passenger.fullname }}
          <p>{{ passenger | json }}</p>
          <div class="date">
            Check in date: 
            {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not Checked In'}}
          </div>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Ameet Swamy',
    checkedIn: false,
    checkInDate: 1490742000000
  },{
    id: 2,
    fullname: 'Chetana Ashok',
    checkedIn: true,
    checkInDate: null
  },{
    id: 3,
    fullname: 'Nivedita Nagabushan',
    checkedIn: true,
    checkInDate: null
  },{
    id: 4,
    fullname: 'Ashna Ashok',
    checkedIn: false,
    checkInDate: null
  },{
    id: 5,
    fullname: 'Rushil Nagabushan',
    checkedIn: false,
    checkInDate: null
  }]
}
