import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', component: PeopleListComponent },
  { path: 'edit/:id', component: PersonEditComponent },
  { path: 'delete/:id', component: PersonDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
