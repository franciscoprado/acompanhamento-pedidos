import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'pedido-page',
    templateUrl: 'pedidoPage.html'
})

export class PedidoPage {
    pedido: any;

    constructor(public navCtrl: NavController, public params: NavParams) {
        this.pedido = params.data;
    }

    goBack() {
        this.navCtrl.pop();
    }

    onPageWillEnter(){
        console.log('Entrou aqui...');
    }
}