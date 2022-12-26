import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { StylecomponentComponent } from './stylecomponent/stylecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    StylecomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
