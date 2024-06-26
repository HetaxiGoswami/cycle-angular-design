import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SegurosComponent } from './seguros/seguros.component';
import { BicicletsComponent } from './biciclets/biciclets.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DifferncialComponent } from './differncial/differncial.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { DepoinmentComponent } from './depoinment/depoinment.component';
import { HeaderSegurosComponent } from './header-seguros/header-seguros.component';
import { HeaderBicycleComponent } from './header-bicycle/header-bicycle.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'seguros',
    component: SegurosComponent,
  },
  {
    path: 'biciclets',
    component: BicicletsComponent,
  },
  {
    path: 'introduction',
    component: IntroductionComponent,
  },
  {
    path: 'differncial',
    component: DifferncialComponent,
  },
  {
    path: 'biciclets',
    component: BicicletsComponent,
  },
  {
    path: 'parceiros',
    component: ParceirosComponent,
  },
  {
    path: 'depoinment',
    component: DepoinmentComponent,
  },
  { path: 'header-seguros', component: HeaderSegurosComponent },
  { path: 'header-bicycle', component: HeaderBicycleComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
