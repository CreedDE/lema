import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
	{
		path: 'login',
		component: AuthComponent,
	},
	{
		path: 'register',
		component: AuthComponent,
	},
	{
		path: 'email-verification',
		component: VerifyEmailComponent,
	},
	{
		path: 'forgot-password',
		component: ForgotPasswordComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
