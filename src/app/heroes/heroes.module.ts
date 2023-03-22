import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ListComponent,
    HeroeComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule, SharedModule],
})
export class HeroesModule {}
