import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'This is the title !!!';

  list = [
    {
      id: 1,
      header: 'This is title 1',
      content: 'This is a long long long long long long long long paragraphs.',
      color: 'blue',
    },
    {
      id: 2,
      header: 'This is title 2',
      content: 'This is a long long long long long long long long paragraphs.',
      color: 'black',
    },
    {
      id: 3,
      header: 'This is title 3',
      content: 'This is a long long long long long long long long paragraphs.',
      color: 'red',
    },
    {
      id: 4,
      header: 'This is title 4',
      content: 'This is a long long long long long long long long paragraphs.',
      color: 'green',
    },
  ];
}
