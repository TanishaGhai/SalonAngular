import {Pipe, PipeTransform} from '@angular/core';
@Pipe(
    {
        name : 'Phone'
    }
)
export class ConvertToPhone implements PipeTransform {

    transform(value: string): string {
       return value.slice(0, 3) + '-' + value.slice(3).slice(0, 4) + '-' +  value.slice(3).slice(4);

    }

}
