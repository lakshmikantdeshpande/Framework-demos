import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    }

    value = value.toLowerCase();
    let array: string[] = value.split(' ');
    let temp: string = '';
    var index = 0;
    for (; index < array.length; index++) {
      if (index === 0) {
        temp += this.capitalizeName(array[index]) + ' ';
        continue;
      } else if (array[index] === "of" || array[index] === "the") {
        temp += array[index] + ' ';
      } else {
        temp += this.capitalizeName(array[index]) + ' ';
      }
    }
    return temp.trim();    
  }

  capitalizeName(name) {
    return name.replace(/\b(\w)/g, s => s.toUpperCase());
  }

}
