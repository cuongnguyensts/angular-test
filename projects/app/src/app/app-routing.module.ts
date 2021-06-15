import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from '@pages/forbidden.component';
import { NotFoundComponent } from '@pages/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing',
    loadChildren: () => import('@pages/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'table',
    loadChildren: () => import('@pages/table/table.module').then(m => m.TableModule)
  },
  {
    path: 'directive',
    loadChildren: () => import('@pages/directive/directive.module').then(m => m.DirectiveModule)
  },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
