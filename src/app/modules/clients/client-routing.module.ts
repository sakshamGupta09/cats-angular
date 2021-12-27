import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListingComponent } from './components/listing/listing.component';
import { DetailsComponent } from './components/details/details.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {
    path: 'listing',
    component: ListingComponent,
  },
  {
    path: 'details/:clientId',
    component: DetailsComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'edit/:clientId',
    component: EditComponent,
  },
  {
    path: '',
    redirectTo: 'listing',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
