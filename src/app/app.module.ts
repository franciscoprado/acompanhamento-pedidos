import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PedidoPage } from '../pages/pedidoPage/pedidoPage';
import { PedidosService } from '../services/pedidos';
import { FormatarPreco } from '../utils/formatar-preco-pipe';
import { AbreviarTexto } from '../utils/abreviar-texto-pipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PedidoPage,
    FormatarPreco,
    AbreviarTexto
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PedidoPage
  ],
  providers: [PedidosService, FormatarPreco, AbreviarTexto]
})
export class AppModule {}
