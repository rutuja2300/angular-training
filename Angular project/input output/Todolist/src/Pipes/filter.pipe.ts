import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], ...args: string[]): any[] {
    return values.filter((obj)=>obj[args[0]]==args[1]);
  }

}
