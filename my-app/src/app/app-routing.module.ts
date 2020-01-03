import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieceListComponent } from './pieces/pieces-list.compontent';


const routes: Routes = [
  { path: 'pieces', component: PieceListComponent },
  { path: '',
  redirectTo: '/base',
  pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
