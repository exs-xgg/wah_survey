import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactionComponent } from './reaction/reaction.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ThanksComponent } from './thanks/thanks.component';


const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {path: 'reaction', component: ReactionComponent},
  {path: 'home',component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'thanks',component: ThanksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
