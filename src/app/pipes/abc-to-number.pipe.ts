import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abcToNumber'
})
export class AbcToNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
