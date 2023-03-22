import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, AsideComponent],
  exports: [HeaderComponent, AsideComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
