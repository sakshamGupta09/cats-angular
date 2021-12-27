import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { ListingComponent } from './components/listing/listing.component';

const routes: Routes = [
  {
    path: 'listing/:clientId',
    component: ListingComponent,
  },
  {
    path: 'add/:clientId',
    component: AddComponent,
  },
  {
    path: 'edit/:contactId',
    component: EditComponent,
  },
  {
    path: 'details/:clientId',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
