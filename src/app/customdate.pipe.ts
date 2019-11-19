import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customdate'
})
export class CustomdatePipe implements PipeTransform {

  transform(value: any): Date {
    var customDate = new Date();
    return customDate;
  }

}
