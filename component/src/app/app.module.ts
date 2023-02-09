import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { StylecomponentComponent } from './stylecomponent/stylecomponent.component';
import { StyleChildComponent } from './style-child/style-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    StylecomponentComponent,
    StyleChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
