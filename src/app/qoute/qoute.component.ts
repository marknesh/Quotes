import { Component, OnInit } from '@angular/core';
import {Qoute} from '../qoute'

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  qoutes: Qoute[]=[
    new Qoute("this is qoute","this is the author","this is the submitter")
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
