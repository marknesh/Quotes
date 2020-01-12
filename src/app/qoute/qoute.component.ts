import { Component, OnInit } from '@angular/core';
import { Qoute } from '../qoute'

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  
  
 
  qoutes: Qoute[] = [
    
    
  ]

  addNewQoute(qoute) {
  
    qoute.dateCreated= new Date(qoute.dateCreated)
    this.qoutes.push(qoute)
  }

thumbsUp(qoute){
  qoute.like=qoute.like + 1
}

thumbsDown(qoute){
  qoute.dislike=qoute.dislike + 1
}



  qouteDelete(isComplete, index) {
    if (isComplete) {
      this.qoutes.splice(index,1)
    }
  }

  toggle(index) {

    this.qoutes[index].showAuthor = !this.qoutes[index].showAuthor
  }

  constructor() { }

  ngOnInit() {
  }

}
