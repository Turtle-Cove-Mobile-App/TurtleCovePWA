import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChecklistPage } from './checklist.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PopoverComponent } from './popover/popover.component';

const routes: Routes = [
  {
    path: '',
    component: ChecklistPage
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
  declarations: [ChecklistPage, PopoverComponent],
  entryComponents: [PopoverComponent]
})
export class ChecklistPageModule {}
