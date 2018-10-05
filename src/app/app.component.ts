import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foo';
  field: string
  version: string
  receiveSubmission(newVersion: string) {
    this.version = newVersion
  }
}
