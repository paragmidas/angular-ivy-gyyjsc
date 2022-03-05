import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  users = [
    {'fname' : 'Amit Kadam', 'designation' : 'software tester', 'salary' : 100000},
    {'fname' : 'Jyoti Kolte', 'designation' : 'ui developer', 'salary' : 100000},
    {'fname' : 'ashwini kundlik', 'designation' : 'ui developer', 'salary' : 100000}
  ]

}
