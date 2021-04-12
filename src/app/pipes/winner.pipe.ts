import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'winner'
})
export class WinnerPipe implements PipeTransform {

  transform(value: unknown, symbol: string): unknown {
    if (!value) {
      return;
    }
    return value + symbol;
  }

}
