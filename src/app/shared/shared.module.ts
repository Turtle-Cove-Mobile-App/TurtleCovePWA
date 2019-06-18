import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [IonicModule, RouterModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent, RouterModule]
})
export class SharedModule {}
