import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   name= "Pavithra";  // sending data from parent to child
   names=['one','two','three'];
   @Output() msgfromchild='';

   newOneInParent(name: string){
    this.names.push(name);  //it is used add data from child to parent
   }

   //Using @Input and @output together
   currentItem="Angular";
   
}
