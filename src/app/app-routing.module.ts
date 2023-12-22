import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { DirectivasComponent } from './components/directivas/directivas.component';

const routes: Routes = [
  { path: '', component: DirectivasComponent },
  { path: 'eventos', component: EventosComponent },
  {path: 'list',component: ListRenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
