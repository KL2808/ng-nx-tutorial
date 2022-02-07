import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@ng-nx-tutorial/data';

@Component({
  selector: 'ng-nx-tutorial-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = [];

  constructor() {}

  ngOnInit() {}
}
