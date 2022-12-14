import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statname' })

export class StatNamePipe implements PipeTransform{
    transform(value: string): string {
        if (value === "hp") {
            return "HP";
        } else if (value === "atk") {
            return "Atk";
        } else if (value === "def") {
            return "Def";
        } else if (value === "spAtk") {
            return "Sp. Atk";
        } else if (value === "spDef") {
            return "Sp. Def";
        } else {
            return "Speed";
        };
    }
}