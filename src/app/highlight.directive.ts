import { Directive, ElementRef, HostListener } from '@angular/core';
import {Qoute} from './qoute'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {

   }
   @HostListener("click") onClick(){
     this.texthighlight("green")
   }



  private texthighlight(colour:string){
    this.elem.nativeElement.style.colour=colour;
  }

}
