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

like=0;
dislike=0


thumbsUp(qoute){
  qoute.like=qoute.like + 1
}

thumbsDown(qoute){
  qoute.dislike=qoute.dislike + 1
}

 


  constructor() { }

  ngOnInit() {
  }

}
