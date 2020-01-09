import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { QouteFormComponent } from './qoute-form/qoute-form.component';
import { QouteDetailsComponent } from './qoute-details/qoute-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    QouteFormComponent,
    QouteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
