import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h4 [innerHTML]="title"></h4>
      <h4>{{ title }}</h4>
      <img [src]="logo" height='50' width='50'>
      <input type="text" [value]="name">
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  title: string;
  logo: string = 'img/angular.svg';
  name: string = 'Ameet';
  constructor() {
    this.title = 'Ultimate Angular';
  }
}
