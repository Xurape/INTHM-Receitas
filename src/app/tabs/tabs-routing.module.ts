import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule),
      },
      {
        path: 'receitas',
        loadChildren: () => import('../receitas/receitas.module').then(m => m.ReceitasPageModule)
      },
      {
        path: 'historia',
        loadChildren: () => import('../historia/historia.module').then(m => m.HistoriaPageModule)
      },
      {
        path: 'sobre',
        loadChildren: () => import('../sobre/sobre.module').then(m => m.SobrePageModule)
      },
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
