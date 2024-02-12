import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-comp',
  templateUrl: './like-comp.component.html',
  styleUrls: ['./like-comp.component.scss']
})
export class LikeCompComponent implements OnInit {

   likeProp:boolean = false;
   likeCount : number = 121;
  constructor() { }

  ngOnInit(): void {

  }
  onbtnClick(){
    this.likeProp = !this.likeProp
    if(this.likeProp){
      this.likeCount++
    }else{
      this.likeCount--
    }
  }
 
}
