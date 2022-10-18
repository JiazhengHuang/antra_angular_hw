import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  users: User[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      dept: 'Finance',
      salary: 5000,
      doj: new Date('2015-12-11'),
    },
    {
      firstName: 'Amy',
      lastName: 'Watson',
      dept: 'HR',
      salary: 8000,
      doj: new Date('2013-07-23'),
    },
    {
      firstName: 'Shrishti',
      lastName: 'Sharma',
      dept: 'IT',
      salary: 10000,
      doj: new Date('2019-10-20'),
    },
  ];
  inputVal: string = '';
  checked: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  reset() {
    this.inputVal = '';
    this.checked = false;
  }

  sort() {
    this.checked = !this.checked;
  }
}
