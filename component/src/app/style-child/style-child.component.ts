import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-child',
  templateUrl: './style-child.component.html',
  styleUrls: ['./style-child.component.css']
})
export class StyleChildComponent implements OnInit {
 @Input() number:any;
 private _names!:string[];
 //intercept input property changes with a setter
 @Input()
 get names():string[]{return this._names} 
 set names(names:string[]){
  this._names=(names) }
  constructor() { }

  ngOnInit(): void {
  }

}
