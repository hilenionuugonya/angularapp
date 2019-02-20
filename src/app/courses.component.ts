import {Component} from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <input [( ngModel)]="email" (keyup.enter)="onKeyUp()"/>
  `
})

export class CoursesComponent {
  email = 'hileni@example.com';

 onKeyUp() {
    console.log(this.email);
 }


}
