import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FilterSpeciesByNameStartsWithPipe } from './pipes/filter-species-by-name-starts-with.pipe';
@NgModule({
  imports: [IonicModule, RouterModule],
  declarations: [HeaderComponent, FilterSpeciesByNameStartsWithPipe],
  exports: [HeaderComponent, RouterModule, FilterSpeciesByNameStartsWithPipe]
})
export class SharedModule {}
