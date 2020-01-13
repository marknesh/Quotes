import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { QouteFormComponent } from './qoute-form/qoute-form.component';
import { QouteDetailsComponent } from './qoute-details/qoute-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { CountDatePipe } from './count-date.pipe';
import { HighlightDirective } from './highlight.directive';




@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    QouteFormComponent,
    QouteDetailsComponent,
    StrikethroughDirective,
    CountDatePipe,
    HighlightDirective,
    
   
    
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
