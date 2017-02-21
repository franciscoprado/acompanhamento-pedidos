import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PedidosService {
    private http: any;
    private data: any;

    constructor(http: Http) {
        this.http = http;
    }

    obterPedidos() {
        this.http.get("http://localhost:8080/acompanhamento-pedidos/lista-pedidos.php")
            .subscribe(res => {
                this.data = res.json();
            }, error => {
                console.log(error);
            });
    }
}