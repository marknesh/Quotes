import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Qoute } from '../qoute';


@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css']
})
export class QouteFormComponent implements OnInit {

  newQoute = new Qoute("","","",new Date(),0,0)

  @Output() addQoute=new EventEmitter <Qoute>();

  submit(){
      
    this.addQoute.emit(this.newQoute)
  }


  constructor() { }

  ngOnInit() {
  }

}
