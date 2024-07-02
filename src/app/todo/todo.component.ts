import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: string[] = [];

  handleTodoAdded(todo: string) {
    this.todos.push(todo);
  }

  handleTodoRemoved(index: number) {
    this.todos.splice(index, 1);
  }
}
