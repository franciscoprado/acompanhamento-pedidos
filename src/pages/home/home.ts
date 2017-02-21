import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PedidoPage } from '../pedidoPage/pedidoPage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  pedidos = [
    {
      codigo: 1,
      imagem: "https://openclipart.org/image/2400px/svg_to_png/211800/matt-icons_package.png",
      titulo: 'Pedido XPTO',
      descricao: 'Produto XPTO foi pedido etc etc.'
    },
    {
      codigo: 2,
      imagem: "https://openclipart.org/image/2400px/svg_to_png/211800/matt-icons_package.png",
      titulo: 'Pedido ABC',
      descricao: 'Produto ABC foi pedido etc etc.'
    }
  ];

  page = PedidoPage;

  constructor(public navCtrl: NavController) {

  }

}
