import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { CpuUsagePreviewComponent } from './ComponentPreviews/cpu-usage-preview/cpu-usage-preview.component';

const routes: Routes = [
  { path: 'dashboard', component: StatisticsComponent },
  { path: 'clients', component: CpuUsagePreviewComponent },
  /* { path: 'cpu', component: null },
  { path: 'memory', component: null },
  {path:'database', component:null}, */
  { path: '**', redirectTo: 'dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
