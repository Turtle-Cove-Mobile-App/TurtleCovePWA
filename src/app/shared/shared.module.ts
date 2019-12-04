import { FormsModule } from '@angular/forms';
import { PwaPromptComponent } from './pwa-prompt/pwa-prompt.component';
import { CommonModule } from '@angular/common';
import { ZoomComponent } from 'src/app/shared/zoom/zoom.component';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FilterSpeciesByNameStartsWithPipe } from './pipes/filter-species-by-name-starts-with.pipe';
@NgModule({
  imports: [CommonModule, IonicModule, RouterModule, FormsModule],
  declarations: [HeaderComponent, FilterSpeciesByNameStartsWithPipe, ZoomComponent, PwaPromptComponent],
  exports: [HeaderComponent, RouterModule, FilterSpeciesByNameStartsWithPipe, ZoomComponent, PwaPromptComponent],
  entryComponents: [ZoomComponent]
})
export class SharedModule {}
