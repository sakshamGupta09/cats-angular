import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoborderRoutingModule } from './joborder-routing.module';

import { ListingComponent } from './components/listing/listing.component';
import { DetailsComponent } from './components/details/details.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

import { JoborderService } from './services/joborder.service';

@NgModule({
  declarations: [
    ListingComponent,
    DetailsComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [CommonModule, JoborderRoutingModule],
  providers: [JoborderService],
})
export class JoborderModule {}
