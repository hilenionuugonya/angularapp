import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: [
    `
    .fa-address-book-empty{
  color: green;
}
      .fa-address-book{
        background: blue;
      }
    `
  ]
})
export class FavoriteComponent {
 @Input('isFavorite') isSelected: boolean;
 @Output('change') click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }

}
export interface FavoriteChangeEventArgs {
  newValue: boolean
}
