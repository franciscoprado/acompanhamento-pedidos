import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatarPreco'})

export class FormatarPreco implements PipeTransform {
    transform(produtos: any, arg):any {
        let precoTotal: number = 0;
        let moeda: string = "R$";
        let valor: string;

        if (produtos instanceof Array) {
            for (let i = 0; i < produtos.length; i++) {
                precoTotal += produtos[i].Valor;
            }
        }

        if (arg !== '') {
            moeda = arg;
        }

        valor = moeda + " " + precoTotal.toFixed(2).replace('.', ',');

        return valor;
    }
}
