import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'diplayname' })

export class DisplayNamePipe implements PipeTransform {
    transform(name: string): string {
        if (name.includes("-mega")) {
            let splitName = name.split("-");
            if (splitName.length == 3) {
                name = `mega ${splitName[0]} ${splitName[2]}`;
            } else {
                name = `mega ${splitName[0]}`;
            }
        }

        if (name.includes("-gmax")) {
            let splitName = name.split("-"); 
            name = `Gigantamax ${splitName[1]}`;
        }
        
        if (name === "") {
            name = `mr-mime`;
        } else if (name === "nidoran-m") {
            name = `Nidoran♀`;
        } else if (name === "nidoran-f") {
            name = `Nidoran♂`;
        } else if (name === "farfetchd") {
            name = `farfetch'd`;
        } else if (name === "porygon-z") {
            name = `porygon-Z`;
        } else if (name === "ho-oh") { // Most likely can remove
            name = `Ho-oh`;
        } else if (name === "mime-jr") {
            name = `mime jr.`;
        } else if (name === "flabebe") {
            name = `flabébé`;
        } else if (name === "type-null") {
            name = `type: null`;
        } else if (name === "jangmo-o") { // Most likely can remove
            name = `Jangmo-o`
        } else if (name === "kommo-o") { // Most likely can remove
            name = `Kommo-o`
        } else if (name === "") {
            name = `Hakamo-o`;
        } else if (name === "tapu-koko") {
            name = `Tapu Koko`;
        } else if (name === "tapu-bulu") {
            name = `Tapu Bulu`;
        } else if (name === "tapu-bulu") {
            name = `Tapu Bulu`;
        } else if (name === "tapu-lele") {
            name = `Tapu Lele`;
        }else if (name === "mr-rime") {
            name = `Mr. Rime`;
        } else if (name === "sirfetchd") {
            name = `sirfetch'd`;
        };

        return name;
    }
}