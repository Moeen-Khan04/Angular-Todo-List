import { Component , Input , Output , EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.css']
})
export class TodoItem {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("Onclick has been triggered")
  }

  onCheckboxClick(todo: Todo){
    console.log(todo)
    this.todoCheckbox.emit(todo)
    console.log(todo)
  }
}
