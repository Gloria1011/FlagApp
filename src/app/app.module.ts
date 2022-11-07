import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlagsComponent } from './flags/flags.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';

@NgModule({
  declarations: [
    AppComponent,
    FlagsComponent,
    FavoriteComponent,
    LearnMoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
