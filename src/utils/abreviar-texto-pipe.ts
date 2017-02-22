import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'abreviarTexto'})

export class AbreviarTexto implements PipeTransform {
    transform(texto: any, arg: number = 30):any {
        let abv = texto;

        if (texto.length > arg) {
            abv = texto.slice(0, arg) + "...";
        }

        return abv;
    }
}