import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitasDetalhePageRoutingModule } from './receitas-detalhe-routing.module';

import { ReceitasDetalhePage } from './receitas-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitasDetalhePageRoutingModule
  ],
  declarations: [ReceitasDetalhePage]
})
export class ReceitasDetalhePageModule {}
