import { Directive, ElementRef, HostListener } from '@angular/core';
import {Qoute} from './qoute'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {   }
   tcolour='none'

   

  private texthighlight(tcolour:string){
    this.elem.nativeElement.style.backgroundColor=tcolour;
  }
  @HostListener ("click") onClick(){
    if(this.tcolour==='none'){
      this.tcolour="yellow";
    }
    else{this.tcolour='none'}
    this.texthighlight(this.tcolour)
  }
 
 
}


