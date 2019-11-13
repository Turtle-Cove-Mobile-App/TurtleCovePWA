import { CommonModule } from '@angular/common';
import { ZoomComponent } from 'src/app/shared/zoom/zoom.component';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FilterSpeciesByNameStartsWithPipe } from './pipes/filter-species-by-name-starts-with.pipe';
@NgModule({
  imports: [CommonModule, IonicModule, RouterModule],
  declarations: [HeaderComponent, FilterSpeciesByNameStartsWithPipe, ZoomComponent],
  exports: [HeaderComponent, RouterModule, FilterSpeciesByNameStartsWithPipe, ZoomComponent],
  entryComponents: [ZoomComponent]
})
export class SharedModule {}
