import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'stringify'})
export default class StringifyPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    return JSON.stringify(value, null, 2);
  }
}
