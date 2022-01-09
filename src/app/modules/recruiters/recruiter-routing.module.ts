import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './components/listing/listing.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path: 'listing',
    component: ListingComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'details/:recruiterId',
    component: DetailsComponent,
  },
  {
    path: 'edit/:recruiterId',
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
export class RecruiterRoutingModule {}
