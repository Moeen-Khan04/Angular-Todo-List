import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todos } from './MyComponents/todos/todos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , Todos],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
   title = 'cwh-todo-list';
  constructor(){
    // setTimeout(() => {
    //   this.title = "Changed Title";
    // }, 2000);
  }
}
