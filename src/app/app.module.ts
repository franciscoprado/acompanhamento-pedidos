import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PedidoPage } from '../pages/pedidoPage/pedidoPage';

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
  providers: []
})
export class AppModule {}
