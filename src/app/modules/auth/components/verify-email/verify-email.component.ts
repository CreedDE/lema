import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../../services/auth.service';

@Component({
	selector: 'lema-verify-email',
	templateUrl: './verify-email.component.html',
})
export class VerifyEmailComponent {
	constructor(public authService: FirebaseAuthService, private router: Router) {}

	goHome(): Promise<boolean> {
		return this.router.navigate(['login']);
	}
}
