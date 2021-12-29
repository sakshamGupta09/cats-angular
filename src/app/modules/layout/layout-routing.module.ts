import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'client',
        loadChildren: () =>
          import('../clients/client.module').then((m) => m.ClientModule),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('../contacts/contacts.module').then((m) => m.ContactsModule),
      },
      {
        path: 'joborders',
        loadChildren: () =>
          import('../joborder/joborder.module').then((m) => m.JoborderModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
