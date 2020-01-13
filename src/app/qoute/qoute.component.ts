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
    let qouteLength =this.qoutes.length;
    qoute.id = qouteLength +1;
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
    if (isComplete){
    let toDelete=confirm(`Are you sure you want to delete ${this.qoutes[index].qoute}`)


    if(toDelete){
      this.qoutes.splice(index,1)
    }

    }
  }

  

  toggle(index) {

    this.qoutes[index].showAuthor = !this.qoutes[index].showAuthor
  }

  constructor() { }

  ngOnInit() {
  }

}
