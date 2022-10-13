import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() data!: Data;
  @Input() list!: Data[];

  constructor() {}

  ngOnInit(): void {}

  changeTitleColor() {
    // reset all the card border colors
    this.list.forEach((item) => {
      let cardEle = document.getElementById(`${item.id}`);
      if (cardEle) {
        cardEle.style.boxShadow = '';
        // cardEle.style.boxShadow = '5px 5px 5px 8px ' + item.color;
      }
    });

    let titleEle = document.getElementById('title');
    let cardEle = document.getElementById(`${this.data.id}`);

    if (titleEle && cardEle) {
      titleEle.style.color = this.data.color;
      cardEle.style.boxShadow = '5px 5px 5px 8px ' + this.data.color;
    }
  }
}
