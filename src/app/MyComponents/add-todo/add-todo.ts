import { Component , EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrls: ['./add-todo.css']
})
export class AddTodo {

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  title: string = '';
  desc: string = '';

  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }

}
