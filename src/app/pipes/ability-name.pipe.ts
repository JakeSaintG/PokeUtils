import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'abilityname' })

export class AbilityNamePipe implements PipeTransform {
    transform(value: string): string {
        if (value.includes("-") ) {
            value = value.replace("-"," ");
        };

        return value;
    }
}