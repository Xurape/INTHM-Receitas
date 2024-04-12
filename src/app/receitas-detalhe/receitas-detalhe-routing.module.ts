import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitasDetalhePage } from './receitas-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitasDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitasDetalhePageRoutingModule {}
