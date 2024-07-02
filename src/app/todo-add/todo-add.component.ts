import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  @Output() todoAdded = new EventEmitter<string>();
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim().length) {
      this.todoAdded.emit(this.newTodo.trim());
      this.newTodo = '';
    }
  }
}
