import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';
// import { WashingtonComponent } from './washington/washington.component';
import { LocationComponent } from './location/location.component';


const routes: Routes = [
  // {path: 'washington', component:WashingtonComponent},
  {path: '', pathMatch:'full', redirectTo: '/washington'},
  {path: ':location', component:LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
