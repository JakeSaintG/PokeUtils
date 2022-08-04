import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statvalue' })

export class StatValuePipe implements PipeTransform{
    transform(value: number): string {
        return `StatBarPlaceholder (${value})`;
    }
}