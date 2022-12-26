import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() fromParent!: string;
@Output()  item= new EventEmitter<string>();
// output decorator is used to pass data from child to parent "item " is the name of output decorator 
//"eventemitter<string>" is  @output()'s type
//"new EventEmitter<string>()" tells angular to create new event emitter ,the data is emit in string type
@Output() nameOfItem= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  newItem(){
    this.item.emit("Hello, everybody"); //emit is used to emit data from child to parent
  }

  newOne(value: string){    // for name
    this.nameOfItem.emit(value);
  }

 
  

}
