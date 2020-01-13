import { Component, OnInit } from '@angular/core';
import { Qoute } from '../qoute'

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  
  
 
  qoutes: Qoute[] = [
    new Qoute(0,"Justice is truth in action","nesh","mike",new Date(2019,12,1),0,0),
    new Qoute(0,"Lost time is never found again","Einstein","john",new Date(2019,11,31),0,0),
    new Qoute(0,"Proverbs are short sentences drawn from long experience","Washington","alex",new Date(2019,11,27),0,0),
   
    
    
    
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



get orderQuotes() {
  return this.qoutes.sort((a, b) => {
    return <any>b.like- <any>a.like;
  });
}


  qouteDelete(isComplete, index) {
    if (isComplete){
    let toDelete=confirm(`Are you sure you want to delete the quote ${this.qoutes[index].qoute}`)


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
