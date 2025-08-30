import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItem } from '../todo-item/todo-item';
import { AddTodo } from "../add-todo/add-todo";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItem, AddTodo],
  templateUrl: './todos.html',
  styleUrls: ['./todos.css']
})
export class Todos {
  localItem: string | null;
  todos: Todo[] = []

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
    this.todos = []
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index , 1)
    localStorage.setItem("todos" , JSON.stringify(this.todos))
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo)
    localStorage.setItem("todos" , JSON.stringify(this.todos))
  }
  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos" , JSON.stringify(this.todos))
  }

}
