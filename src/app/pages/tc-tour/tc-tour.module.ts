import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TcTourPage } from './tc-tour.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { ZoomComponent } from 'src/app/shared/zoom/zoom.component';

const routes: Routes = [
  {
    path: '',
    component: TcTourPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TcTourPage, ModalComponent, ZoomComponent],
  entryComponents: [ModalComponent, ZoomComponent]
})
export class TcTourPageModule {}
