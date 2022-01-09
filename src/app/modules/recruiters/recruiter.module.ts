import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchModule } from 'src/app/shared/search/search.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { ModalModule } from 'src/app/shared/modal/modal.module';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

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
  imports: [
    CommonModule,
    RecruiterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SearchModule,
    LoaderModule,
    ModalModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [RecruiterService],
})
export class RecruiterModule {}
