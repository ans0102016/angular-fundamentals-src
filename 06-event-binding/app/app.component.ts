import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick()">
        Change Name
      </button>
      <input 
        type="text" 
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)">
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Ameet';

  handleClick() {
    this.name = 'Swamy';
  }
  handleInput(event:any) {
    this.name = event.target.value;
  }
  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }
}
