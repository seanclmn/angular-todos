import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() todoTitle: string;
  @Input() index: number

  @Output() removeTodoEvent = new EventEmitter<number>()

  removeTodo() {
    this.removeTodoEvent.emit(this.index)
    console.log(this.index)
  }
}
