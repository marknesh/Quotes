import { Component, OnInit } from '@angular/core';
import { Qoute } from '../qoute'

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  qoutes: Qoute[] = [
    new Qoute("be wise", "mark", "oddd",new Date(2000,6,8))
  ]

  addNewQoute(qoute) {
    this.qoutes.push(qoute)
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
