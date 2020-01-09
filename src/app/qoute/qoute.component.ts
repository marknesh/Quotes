import { Component, OnInit } from '@angular/core';
import {Qoute} from '../qoute'

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  qoutes: Qoute[]=[
    new Qoute("kkk","kmssssssskx","kksww")
  ]
  
  addNewQoute(qoute){
    this.qoutes.push(qoute)
  }

  toggle(index){
  
  this.qoutes[index].showAuthor=!this.qoutes[index].showAuthor
  }

  constructor() { }

  ngOnInit() {
  }

}
