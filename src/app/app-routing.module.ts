import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeartbeatComponent } from './heartbeat/heartbeat.component';
import { TestChartComponent } from './test-chart/test-chart.component';

const routes: Routes = [
  { path: '', component: TestChartComponent },
  { path: 'heartbeat', component: HeartbeatComponent },
  { path: 'test', component: TestChartComponent },
  { path: '*', redirectTo: '/heartbeat' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
