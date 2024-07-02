import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: string[] = [];
  @Output() todoRemoved = new EventEmitter<number>();

  removeTodo(index: number) {
    this.todoRemoved.emit(index);
  }
}
