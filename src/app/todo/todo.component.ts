import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // deleteData: any = [];
  todoList: any = [];
  todo: any = {
    name: '',
    status: false
  }
  constructor() { }

  ngOnInit(): void {
    this.getTodoLocalSt();
  }
  getTodoLocalSt() {
    if (localStorage.getItem('hihi')) {
      let data: any = localStorage.getItem('hihi');
      this.todoList = JSON.parse(data);
    } else {
      this.todoList = [];
    }
  }

  addTodo(): void {
    this.todoList.push(this.todo);
    localStorage.setItem('hihi', JSON.stringify(this.todoList))
    this.getTodoLocalSt();
  }
  update(i: number): void {
    this.todoList.find((item: any, key: number) => {
      return key == i
    }).status = true;
    localStorage.setItem('hihi', JSON.stringify(this.todoList))
    this.getTodoLocalSt();
  }

  deleteData(name: string): void {
    const index = this.todoList.findIndex((item: { name: string; })  => item.name === name);
    this.todoList.splice(index, 1);
  }
}
