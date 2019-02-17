import {Component} from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <div (click)="onDivClicked()">
      <button (click)="onSave($event)" >Save</button>
    </div>
  `
})

export class CoursesComponent {
  onDivClicked() {
    console.log('Div was clicked');
  }
  onSave($event) {
    $event.stopPropagation();

    console.log('Button was clicked', $event);
  }


}
