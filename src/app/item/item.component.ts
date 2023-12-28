import { Component, Input } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  
  isSelected!: boolean;
  description!: string;
  date!: Date;

  @Input()
  item!: Todo;

  removeItem() {

  }
}
