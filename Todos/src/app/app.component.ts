import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Todos';
  newTodoTitle: string = ""
  public todos: string[] = []

  constructor(private TodosService: TodosService) {}

  ngOnInit() {
    this.todos = this.TodosService.getTodos()
  }

  removeTodo(index: number) {
    this.TodosService.removeTodo(index)
  }

  addTodo() {
    this.TodosService.addTodo(this.newTodoTitle)
    this.newTodoTitle = ""
  }
}
