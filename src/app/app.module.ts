import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { BicicletsComponent } from './biciclets/biciclets.component';
import { SegurosComponent } from './seguros/seguros.component';
import { ContactComponent } from './contact/contact.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DifferncialComponent } from './differncial/differncial.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { DepoinmentComponent } from './depoinment/depoinment.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BicicletsComponent, SegurosComponent, ContactComponent, IntroductionComponent, DifferncialComponent, ParceirosComponent, DepoinmentComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
