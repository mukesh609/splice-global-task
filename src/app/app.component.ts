import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display!: boolean;

  title = 'splice-global-task';
  constructor() { }

  click() {
    this.display = !this.display;
  }
}
