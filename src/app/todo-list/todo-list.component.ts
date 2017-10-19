import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Array<string> = [
    'valami',
    'valami2',
    'Kivinni a szemetet',
    'ALMA ALMA'
  ];

  constructor() { }

  ngOnInit() {
  }

  deleteMe(todo: string) {
    this.todos = this.todos.filter(s => s !== todo);
  }

}
