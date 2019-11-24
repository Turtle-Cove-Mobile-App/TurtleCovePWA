import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GwStopsPage } from './gw-stops.page';
import { GwStopComponent } from './gw-stop/gw-stop.component';
import { GwStopViewerComponent } from './gw-stop-viewer/gw-stop-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: GwStopsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GwStopsPage, GwStopComponent, GwStopViewerComponent],
  entryComponents: [GwStopComponent]
})
export class GwStopsPageModule {}
