import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';
// import { BurbankComponent } from './burbank/burbank.component';
// import { ChicagoComponent } from './chicago/chicago.component';
// import { DallasComponent } from './dallas/dallas.component';
// import { SanjoseComponent } from './sanjose/sanjose.component';
// import { SeattleComponent } from './seattle/seattle.component';
// import { WashingtonComponent } from './washington/washington.component';
import { LocationComponent } from './location/location.component';


const routes: Routes = [
  // {path: 'burbank', component:BurbankComponent},
  // {path: 'chicago', component:ChicagoComponent},
  // {path: 'dallas', component:DallasComponent},
  // {path: 'sanjose', component:SanjoseComponent},
  // {path: 'seattle', component:LocationComponent},
  // {path: 'washington', component:WashingtonComponent},
  {path: '', pathMatch:'full', redirectTo: '/washington'},
  {path: ':location', component:LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
