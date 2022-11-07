import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { DeuxiemeComponent } from './deuxieme/deuxieme.component';
import { TroisiemeComponent } from './troisieme/troisieme.component';
import { QuatriemeComponent } from './MesComposants/quatrieme/quatrieme.component';

@NgModule({
  declarations: [AppComponent, PremierComponent, DeuxiemeComponent, TroisiemeComponent, QuatriemeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
//premier.component.html
//premier.component.css
//premier.component.spec.ts
//premier.component.ts
// et le mise ajour de app.momdules.ts .
export class AppModule {}
