import {Component} from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <img [src]='imageUrl'/>
    <table>
      <tr>
        <td [attr.colspan]='colSpan'></td>
      </tr>
    </table>
  `
})

export class CoursesComponent {
  imageUrl = '' ;
  colSpan = 2;

}
