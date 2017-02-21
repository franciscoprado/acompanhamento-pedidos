import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PedidoPage } from '../pedidoPage/pedidoPage';

import { PedidosService } from '../../services/pedidos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  page = PedidoPage;

  constructor(public navCtrl: NavController, public pedidos: PedidosService) {
    this.pedidos = pedidos;
    this.pedidos.obterPedidos();
  }

}
