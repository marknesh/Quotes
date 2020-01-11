export class Qoute {
    showAuthor: boolean;
    constructor(public qoute: string,public author: string,public user: string,public completeDate:Date,public like:number,public dislike:number){
      this.showAuthor=false;
    }
  }
