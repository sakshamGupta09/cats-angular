import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListingComponent } from './components/listing/listing.component';
import { DetailsComponent } from './components/details/details.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {
    path: 'listing/:clientId',
    component: ListingComponent,
  },
  {
    path: 'details/:jobId',
    component: DetailsComponent,
  },
  {
    path: 'add/:clientId',
    component: AddComponent,
  },
  {
    path: 'edit/:jobId',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoborderRoutingModule {}
