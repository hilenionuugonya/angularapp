import {Component} from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
     {{text |summary:10}}
  `
})

export class CoursesComponent {
  text = `
  A pipe is a method used to pass information from one program process to another.
  `

}
