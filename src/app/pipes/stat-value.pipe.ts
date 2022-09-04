import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statvalue' })

export class StatValuePipe implements PipeTransform {
    transform(value: number): number { return (value / 255)*100; };
}