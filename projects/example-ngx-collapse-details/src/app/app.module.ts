import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCollapseDetailsModule } from 'ngx-collapse-details';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCollapseDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
