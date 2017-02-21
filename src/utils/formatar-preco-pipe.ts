import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatarPreco'})

export class FormatarPreco implements PipeTransform {
    transform(valor: any, arg):any {
        valor = valor.toFixed(2);
        let moeda:string = "R$";

        if (arg != undefined) {
            moeda = arg;
        }

        let formatado = moeda + " " + valor.replace('.', ',');

        return formatado;
    }
}
