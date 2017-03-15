import { Component } from '@angular/core';

import {InputComponent} from './input/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  votos=[
      {title: 'option 1 '},
      {title: 'option 4 '},
      {title: 'option 3 '},
      {title: 'option 4 '}
  ];

}
