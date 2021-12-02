import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ListingComponent } from './components/listing/listing.component';
import { DetailsComponent } from './components/details/details.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

import { ClientService } from './services/client.service';

@NgModule({
  declarations: [
    ListingComponent,
    DetailsComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [CommonModule, ClientRoutingModule, MatButtonModule, MatIconModule],
  providers: [ClientService],
})
export class ClientModule {}
