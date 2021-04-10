import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeartbeatComponent } from './heartbeat/heartbeat.component';

const routes: Routes = [
  { path: 'heartbeat', component: HeartbeatComponent },
  { path: '*', redirectTo: '/heartbeat' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
