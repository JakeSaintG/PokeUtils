import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'removedash' })

export class RemoveDashPipe implements PipeTransform {
    transform(value: string): string {return value = value.replace("-"," ");};
}