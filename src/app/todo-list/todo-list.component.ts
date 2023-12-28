import { Component } from '@angular/core';
import { Todo } from '../shared/todo';
import { TodoListService } from '../shared/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoDescription!: string;
  todoDueDate!: any;
  public showDone = false;

  constructor(public todoListService: TodoListService) {

  }

  todos: Todo[] = [
    { id: 1, description: 'Mathe Ferien-Hausübung', dueDate: new Date(2020, 9, 21) },
    { id: 2, description: 'Geburtstagsgeschenk Oma', dueDate: new Date(2020, 8, 20) },
    { id: 3, description: 'Zimmer aufräumen', dueDate: new Date(2020, 8, 14) }
  ]

  getOpenTodos(): Todo[] {
    return this.todos.filter(t => !t.doneDate).sort((a, b) => a.dueDate < b.dueDate ? -1 : 1);
  }

  addTodo() {
    const item: Todo = {
      id: -1,
      description: this.todoDescription,
      dueDate: this.todoDueDate
    }
    // this.todoListService.addTodo(item);
    this.todoListService.addTodo(this.todoDescription, new Date(this.todoDueDate));
    this.todoDescription = '';
    this.todoDueDate = undefined;
  }
}
