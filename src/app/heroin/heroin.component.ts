import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroin',
  templateUrl: './heroin.component.html',
  styles:[
    `
      .online{
        color:white;
      }
    `
  ]
})
export class HeroinComponent implements OnInit {

  status:boolean = true;
  logs = [];
  constructor() { }

  ngOnInit() {
  }

  getStatus(){
    this.status = !this.status;
    this.logs.push(this.logs.length+1);
  }

  onToggle(){
    return this.status;
  }

  getColor(test:Number){
    if(test>5){
      return "red";
    }
    else{
      return "green";
    }
  }

  getOnline(test:Number){
    if(test>5){
      return true;
    }
    else

  {
    return false;
  }
  }

}