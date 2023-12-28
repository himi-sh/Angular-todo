import { Component } from '@angular/core';
import { TodoListService } from '../shared/todo-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private todoListService: TodoListService) {

  }

  getTodoPercentage(): number {
    const allTodos = this.todoListService.getTodos();

    if (allTodos.length) {
      return this.todoListService.getTodos(false).length / allTodos.length * 100;
    } else {
      return 0;
    }
  }

  getDonePercentage(): number {
    const allTodos = this.todoListService.getTodos();

    if (allTodos.length) {
      return this.todoListService.getTodos(true).length / allTodos.length * 100;
    } else {
      return 0;
    }
  }
}
