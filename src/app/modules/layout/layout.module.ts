import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidenavComponent],
  imports: [CommonModule, LayoutRoutingModule, MatButtonModule, MatIconModule],
})
export class LayoutModule {}
