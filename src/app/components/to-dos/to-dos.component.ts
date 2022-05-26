import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
title= "To-Dos";
todos:Todo[];

inputToDo:string = "";
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content:"First todo",
        completed:false
      },
      {
        content:"Second todo",
        completed:true
      }
    ]
  }
  toggleDone(id:number) {
    this.todos.map((v,i) =>  {if(i==id) v.completed = ! v.completed;
    return v;
  })

}
deleteTodo(id:number) {
  this.todos = this. todos. filter((v,i) => i != id);
}
addTodo() {
  this.todos.push({
    content: this.inputToDo,
    completed:false
  });
  this.inputToDo = "";
}
}
