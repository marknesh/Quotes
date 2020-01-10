export class Qoute {
    showAuthor: boolean;
    constructor(public qoute: string,public author: string,public user: string,public dateCreated:Date){
      this.showAuthor=false;
    }
  }
