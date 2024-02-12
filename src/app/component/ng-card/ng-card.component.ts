import { Component, OnInit } from '@angular/core';
import { cardinfo } from 'src/app/const/cardinfo';
import { CardInterface } from 'src/app/interface/cardinterface';

@Component({
  selector: 'app-ng-card',
  templateUrl: './ng-card.component.html',
  styleUrls: ['./ng-card.component.scss']
})
export class NgCardComponent implements OnInit {
   cardProp:Array<CardInterface> = cardinfo
  constructor() { }

  ngOnInit(): void {
  }

}
