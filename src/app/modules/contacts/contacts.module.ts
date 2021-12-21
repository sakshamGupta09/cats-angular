import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
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
  imports: [CommonModule, ContactsRoutingModule],
  providers: [ContactsService],
})
export class ContactsModule {}
