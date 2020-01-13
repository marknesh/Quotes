import { Directive, ElementRef, HostListener } from '@angular/core';
import {Qoute} from './qoute'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {   }
  @HostListener ("click") onClick(){
    this.texthighlight('blue')}

   

  private texthighlight(tcolour:string){
    this.elem.nativeElement.style.backgroundColor=tcolour;
  }

 
 
}


