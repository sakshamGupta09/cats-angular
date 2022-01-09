import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { ListingComponent } from './components/listing/listing.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { DetailsComponent } from './components/details/details.component';
import { RecruiterService } from './services/recruiter.service';

@NgModule({
  declarations: [
    ListingComponent,
    AddComponent,
    EditComponent,
    DetailsComponent,
  ],
  imports: [CommonModule, RecruiterRoutingModule],
  providers: [RecruiterService],
})
export class RecruiterModule {}
