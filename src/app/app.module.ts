import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PedidoPage } from '../pages/pedidoPage/pedidoPage';
import { PedidosService } from '../services/pedidos';
import { FormatarDataPipe } from '../utils/formatar-data-pipe';
import { FormatarPreco } from '../utils/formatar-preco-pipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PedidoPage,
    FormatarDataPipe,
    FormatarPreco
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
  providers: [PedidosService, FormatarPreco]
})
export class AppModule {}
