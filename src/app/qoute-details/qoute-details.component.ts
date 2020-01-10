import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Qoute} from '../qoute'


@Component({
  selector: 'app-qoute-details',
  templateUrl: './qoute-details.component.html',
  styleUrls: ['./qoute-details.component.css']
})
export class QouteDetailsComponent implements OnInit {

  @Input() qoute:Qoute;  
  @Output() isComplete=new EventEmitter <boolean>();
qouteDelete(complete:boolean)
{this.isComplete.emit(complete)}

  constructor() { }

  ngOnInit() {
  }

}
