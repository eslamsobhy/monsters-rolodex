import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app component/app.component';
import { MonsterDetailsComponent } from './components/details component/monster-details/monster-details.component';
import { ErrorComponent } from './components/error component/error/error.component';
import { HomeComponent } from './components/home component/home/home.component';
import { MonsterComponent } from './components/monster component/monster/monster.component';
import { MonstersComponent } from './components/monsters component/monsters/monsters.component';
import { HeaderComponent } from './components/header component/header/header.component';
import { HeaderDirective } from './directives/header.directive';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'monsters', component: MonstersComponent },
  { path: 'monsters/:id', component: MonsterDetailsComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MonsterDetailsComponent,
    ErrorComponent,
    HomeComponent,
    MonsterComponent,
    MonstersComponent,
    HeaderComponent,
    HeaderDirective,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
