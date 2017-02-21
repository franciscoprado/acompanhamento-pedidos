import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PedidosService {
    private http: any;
    private data: any;
    private url: string = "http://portalaasp.7comm.com.br:2525/api/Pedidos";

    constructor(http: Http) {
        this.http = http;
    }

    obterPedidos() {
        this.http.get(this.url)
            .subscribe(res => {
                this.data = res.json();
            }, error => {
                console.log(error);
            });
    }
}