import { Component, OnInit } from '@angular/core';
import { cricketersArr } from 'src/app/const/const';
import { CricketTeam } from 'src/app/interface/interface1';

@Component({
  selector: 'app-ng-table',
  templateUrl: './ng-table.component.html',
  styleUrls: ['./ng-table.component.scss']
})
export class NgTableComponent implements OnInit {
   cricketprop:Array<CricketTeam> = cricketersArr
  constructor() { }

  ngOnInit(): void {
    
  }
  
}
