import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'pedido-page',
    templateUrl: 'pedidoPage.html'
})

export class PedidoPage {
    constructor(public navCtrl: NavController, public params: NavParams) {

    }

    goBack() {
        this.navCtrl.pop();
    }

    onPageWillEnter(){
        console.log('Entrou aqui...');
    }
}