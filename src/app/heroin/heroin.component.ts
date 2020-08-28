import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroin',
  template:
  `   <button (click)="getStatus()">Click</button>

    <p *ngIf="onToggle()">Secret Recipe</p>


  <p *ngFor="let test of logs" 
  [ngStyle]="{backgroundColor:getColor(test)}"
  [ngClass]="{online:getOnline(test)}">{{test}}</p>
  `,
  styles:[
    `.online{
    color:hotpink;
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