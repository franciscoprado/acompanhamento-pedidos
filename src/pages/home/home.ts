import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PedidoPage } from '../pedidoPage/pedidoPage';

import { PedidosService } from '../../services/pedidos';

import { Events, AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  page = PedidoPage;
  loader: any;

  constructor(public navCtrl: NavController, public pedidos: PedidosService, public events: Events, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.pedidos = pedidos;
    this.pedidos.obterPedidos();

    this.iniciarLoading();
    this.adicionarEventoDeSucesso();
    this.adicionarEventoDeErro();
  }

  iniciarLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Aguarde, carregando..."
    });

    this.loader.present();
  }

  adicionarEventoDeSucesso() {
    this.events.subscribe('httpSucesso', (error) => {
      this.loader.dismiss();
    });
  }

  adicionarEventoDeErro() {
    this.events.subscribe('httpErro', (error) => {
      this.loader.dismiss();
      this.exibirMensagem(error);
    });
  }

  exibirMensagem(error: any) {
    let alert = this.alertCtrl.create({
        title: 'Erro',
        subTitle: 'Não foi possível acessar a API de pedidos. Cód. do status: ' + error.status,
        buttons: ['OK']
      });
      alert.present();
  }

}
