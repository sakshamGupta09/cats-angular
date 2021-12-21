import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { SearchModule } from 'src/app/shared/search/search.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListingComponent } from './components/listing/listing.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactsService } from './services/contacts.service';

@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ListingComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    LoaderModule,
    SearchModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [ContactsService],
})
export class ContactsModule {}
