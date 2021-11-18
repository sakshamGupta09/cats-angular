import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingService } from './services/selective-preloading/selective-preloading.service';

const routes: Routes = [
  {
    path: 'onboarding',
    loadChildren: () =>
      import('./modules/onboarding/onboarding.module').then(
        (m) => m.OnboardingModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/onboarding/login',
  },
  {
    path: '**',
    redirectTo: '/onboarding',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: SelectivePreloadingService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
