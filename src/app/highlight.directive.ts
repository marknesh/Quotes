import { Directive, ElementRef, HostListener } from '@angular/core';
import {Qoute} from './qoute'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {  
     this.elem.nativeElement.style.backgroundColor="yellow"}
    }
   

   

  
  
  






    