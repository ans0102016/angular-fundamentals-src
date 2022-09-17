import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
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
          </li>
        </ul>
        <h3>Airline Passengers</h3>
        <div>
          <ul>
            <li *ngFor="let passenger of passengers, let i = index">
              <span 
                class="status"
                [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')"></span>  
            {{ i }}: {{ passenger.fullname }}
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
    checkedIn: false
  },{
    id: 2,
    fullname: 'Chetana Ashok',
    checkedIn: true
  },{
    id: 3,
    fullname: 'Nivedita Nagabushan',
    checkedIn: true
  },{
    id: 4,
    fullname: 'Ashna Ashok',
    checkedIn: false
  },{
    id: 5,
    fullname: 'Rushil Nagabushan',
    checkedIn: false
  }]
}
