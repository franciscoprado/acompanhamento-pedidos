import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatarData'})

export class FormatarDataPipe implements PipeTransform {
    transform(timestamp: any, arg):any {
        let data = new Date(timestamp * 1000);
        let dia = data.getDate();
        let mes = data.getMonth() + 1;
        let ano = data.getFullYear();
        let formatada = dia + "/" + mes + "/" + ano;

        return formatada;
    }
}