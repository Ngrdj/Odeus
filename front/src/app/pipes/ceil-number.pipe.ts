import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ceilNumber'
})
export class CeilNumberPipe implements PipeTransform {

  transform(value: number): number {
    return Math.ceil(value);
  }

}
