import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    if (value=='Front-end'){
      return  'computer';
    }
    else if (value=='Back-end'){
      return 'code'
    }
    return 'computer';
  }

}
