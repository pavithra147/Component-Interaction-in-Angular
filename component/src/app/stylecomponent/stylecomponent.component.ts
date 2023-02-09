import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylecomponent',
  template: `<h1>In StyleComponent</h1>
  <app-style-child 
  *ngFor="let num of number"
  [number]=num
  [names]="name"></app-style-child>`,
  styles:['h1 {font-style:italic; }']

})
export class StylecomponentComponent implements OnInit {
  number=['one','two','three'];
 name:string[]=['pavi','revathi']
  constructor() { }

  ngOnInit(): void {
  }

}
