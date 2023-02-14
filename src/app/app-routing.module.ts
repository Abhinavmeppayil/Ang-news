import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadsComponent } from './topheads/topheads.component';

const routes: Routes = [
  {path:'',component:TopheadsComponent},
  //top hradlimes and home
  {path:'tech',component:TechnewsComponent},
  {path:'buss',component:BusinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
