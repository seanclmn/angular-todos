import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  title: string = 'Todos';
  todos: string[]= ["todo1","todo2","todo3"] 

  constructor() { }

  getTodos(){
    console.log(this.todos)
    return this.todos
  }

  removeTodo(index: number) {
    if (index > -1) {
      this.todos.splice(index, 1);
    }
    console.log(this.todos)
  }

  addTodo(newtitle: string) {
    this.todos.push(newtitle)
    console.log(this.todos)
  }
}
