import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app component/app.component';
import { MonsterDetailsComponent } from './components/details component/monster-details/monster-details.component';
import { ErrorComponent } from './components/error component/error/error.component';
import { HomeComponent } from './components/home component/home/home.component';
import { MonsterComponent } from './components/monster component/monster/monster.component';
import { MonstersComponent } from './components/monsters component/monsters/monsters.component';
import { HeaderComponent } from './components/header component/header/header.component';

@NgModule({
  declarations: [AppComponent, MonsterDetailsComponent, ErrorComponent, HomeComponent, MonsterComponent, MonstersComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
