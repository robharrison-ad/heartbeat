import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeartbeatComponent } from './heartbeat/heartbeat.component';
import { ChartsModule } from 'ng2-charts';
import { TestChartComponent } from './test-chart/test-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeartbeatComponent,
    TestChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
