import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoborderRoutingModule } from './joborder-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

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
  imports: [
    CommonModule,
    JoborderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
  ],
  providers: [JoborderService],
})
export class JoborderModule {}
