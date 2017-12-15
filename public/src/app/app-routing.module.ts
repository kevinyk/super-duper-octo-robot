import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { SuccessComponent } from './success/success.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
	{
		path: '',
		component: LoginRegComponent
	},
	{
		path: 'success',
		component: SuccessComponent
	},
	{
		path: 'users/:id',
		component: ShowComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
