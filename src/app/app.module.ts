import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactionComponent } from './reaction/reaction.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ThanksComponent } from './thanks/thanks.component';
import { ReactionService } from './reaction.service';
import { ImagesService} from './images.service';


@NgModule({
  declarations: [
    AppComponent,
    ReactionComponent,
    HomeComponent,
    CategoryComponent,
    ThanksComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ReactionService,ImagesService],
  bootstrap: [AppComponent],
})

export class AppModule { }


