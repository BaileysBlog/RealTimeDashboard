import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { CpuUsagePreviewComponent } from './ComponentPreviews/cpu-usage-preview/cpu-usage-preview.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'dashboard', component: StatisticsComponent },
  /* { path: 'clients', component:null },
  { path: 'cpu', component: null },
  { path: 'memory', component: null },
  {path:'database', component:null}, */
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
