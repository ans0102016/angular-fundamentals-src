import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input 
        type="text"
        [value]="name"
        (input)="handleChange($event.target.value)">
      <div *ngIf="name.length >">
        Searching for... {{ name }}
      </div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Ameet';

  handleChange(value: string) {
    this.name = value;
  }
}
