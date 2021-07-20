/* eslint-disable @typescript-eslint/unbound-method */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../../services/auth.service';

interface PasswordLost {
	email: string;
}

@Component({
	selector: 'lema-forgot-password',
	templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
	passwordForm: FormGroup;
	constructor(public authService: FirebaseAuthService, private fb: FormBuilder, private router: Router) {
		this.passwordForm = fb.group({
			email: ['', Validators.required],
		});
	}
	goHome(): Promise<boolean> {
		return this.router.navigate(['login']);
	}

	submitPForm(): Promise<void> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const lostpw: PasswordLost = this.passwordForm.value;

		return this.authService.ForgotPassword(lostpw.email);
	}
}
