import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Events } from 'ionic-angular';

@Injectable()
export class PedidosService {
    private http: any;
    private data: any;
    private url: string = "http://portalaasp.7comm.com.br:2525/api/Pedidos";

    constructor(http: Http, public events: Events) {
        this.events = events;
        this.http = http;
    }

    obterPedidos() {
        this.http.get(this.url)
            .subscribe(res => {
                this.data = res.json();
                this.events.publish('httpSucesso');
            }, error => {
                this.events.publish('httpErro', error);
                console.log(error);
            });
    }
}