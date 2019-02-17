import {Component} from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <input (keyup.enter)="onKeyUp()"/>
  `
})

export class CoursesComponent {
 onKeyUp() {
    console.log('ENTER was pressed');
 }


}
