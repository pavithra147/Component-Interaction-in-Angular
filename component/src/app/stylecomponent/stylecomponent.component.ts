import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylecomponent',
  template: '<h1>component styles</h1>',
  styles:['h1 {font-style:italic; }']

})
export class StylecomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
