import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statvalue' })

export class StatValuePipe implements PipeTransform{
    transform(value: number): number {
        value = (value / 255)*100;
        return value;
    }
}