import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { ListingComponent } from './components/listing/listing.component';
import { AddComponent } from './components/add/add.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';

import { CandidateService } from './services/candidate.service';

@NgModule({
  declarations: [
    ListingComponent,
    AddComponent,
    DetailsComponent,
    EditComponent,
  ],
  imports: [CommonModule, CandidateRoutingModule],
  providers: [CandidateService],
})
export class CandidateModule {}
