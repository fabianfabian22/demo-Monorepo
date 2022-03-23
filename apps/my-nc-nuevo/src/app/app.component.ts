import { Component } from '@angular/core';
import { greet } from '@trucos/utilsnx';

@Component({
  selector: 'trucos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-nc-nuevo';

  greeting = greet('fabian');



}
