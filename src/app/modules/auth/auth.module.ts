import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FirebaseAuthService } from './services/auth.service';

@NgModule({
	imports: [SharedModule, AuthRoutingModule],
	providers: [FirebaseAuthService],
	declarations: [AuthComponent],
	exports: [AuthComponent],
})
export class AuthModule {}
