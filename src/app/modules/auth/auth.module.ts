import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { FirebaseAuthService } from './services/auth.service';

@NgModule({
	imports: [SharedModule, AuthRoutingModule],
	providers: [FirebaseAuthService],
	declarations: [AuthComponent, VerifyEmailComponent, ForgotPasswordComponent],
	exports: [AuthComponent, VerifyEmailComponent, ForgotPasswordComponent],
})
export class AuthModule {}
