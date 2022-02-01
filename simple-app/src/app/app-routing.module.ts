import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: 'people',
    component: SummaryComponent,
  },
  {
    path: '**',
    redirectTo: 'people',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
