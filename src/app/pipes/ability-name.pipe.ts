import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'abilityname' })

export class AbilityNamePipe implements PipeTransform {
    transform(value: string): string {return value = value.replace("-"," ");};
}