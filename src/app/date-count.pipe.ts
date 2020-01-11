import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {


  transform(value: any): number {
    let today:Date = new Date()
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference= Math.abs(todayWithNoTime - value)
    const secondsInDay= 86400;
    var changeSeconds = dateDifference * 0.001;
    var numberOfDays= changeSeconds/secondsInDay;

    if(numberOfDays>1 && todayWithNoTime>value){
      return numberOfDays;
    }else{
      return 2;
    }    
  }

}
  
   
 