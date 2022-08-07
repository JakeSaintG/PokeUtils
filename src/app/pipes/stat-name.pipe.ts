import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statname' })

export class StatNamePipe implements PipeTransform{
    transform(value: string): string {
        if (value === "hp") {
            return "HP";
        } else if (value === "atk") {
            return "Attack";
        } else if (value === "def") {
            return "Defense";
        } else if (value === "spAtk") {
            return "Sp. Attack";
        } else if (value === "spDef") {
            return "Sp. Defense";
        } else {
            return "Speed";
        };
    }
}