import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'addSpaces'
})
export class AddSpaces implements PipeTransform {
    transform(value: string , character: string) {
        return value.split('').join(' ');
    }
}
