import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'abilityname' })

export class AbilityNamePipe implements PipeTransform {
    transform(value: string): string {
        if (value.includes("-") ) {
            value = value.replace("-"," ");
        };

        return value.replace(
            /\w\S*/g,
            function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
}