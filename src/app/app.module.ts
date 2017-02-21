import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PedidoPage } from '../pages/pedidoPage/pedidoPage';
import { PedidosService } from '../services/pedidos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PedidoPage
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
  providers: [PedidosService]
})
export class AppModule {}
