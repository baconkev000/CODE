import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieceListComponent } from './pieces/pieces-list.compontent';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'pieces', component: PieceListComponent },
  { path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
