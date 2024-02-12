import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nglist',
  templateUrl: './nglist.component.html',
  styleUrls: ['./nglist.component.scss']
})
export class NglistComponent implements OnInit {
  
  skillsArray: Array<string> = [`HTML`,`CSS`,`JAVASCRIPT`,`ANGULAR`,`REACT`]
  constructor() { }

  ngOnInit(): void {
  }
}
