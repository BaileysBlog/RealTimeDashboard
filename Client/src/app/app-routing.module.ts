import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClientListComponent } from './client-list/client-list.component';

const routes: Routes = [
  { path: 'dashboard', component: StatisticsComponent },
  { path: 'clients', component:ClientListComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
