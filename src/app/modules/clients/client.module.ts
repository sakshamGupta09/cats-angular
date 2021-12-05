import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { SearchModule } from 'src/app/shared/search/search.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { MatPaginatorModule } from '@angular/material/paginator';

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
  imports: [
    CommonModule,
    ClientRoutingModule,
    SearchModule,
    LoaderModule,
    MatPaginatorModule,
  ],
  providers: [ClientService],
})
export class ClientModule {}
