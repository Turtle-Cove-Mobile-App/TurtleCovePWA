import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FilterByStartsWithPipe } from './pipes/filter-by-starts-with.pipe';
@NgModule({
  imports: [IonicModule, RouterModule],
  declarations: [HeaderComponent, FilterByStartsWithPipe],
  exports: [HeaderComponent, RouterModule, FilterByStartsWithPipe]
})
export class SharedModule {}
