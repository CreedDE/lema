/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseAuthService } from '../../services/auth.service';

interface Credentials {
	username: string;
	email: string;
	password: string;
}

@Component({
	selector: 'lema-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
	isSubmitting = false;
	authType = '';
	title = '';
	authForm: FormGroup;
	buttonTitle = '';

	constructor(private route: ActivatedRoute, private fb: FormBuilder, private authService: FirebaseAuthService) {
		this.authForm = fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	ngOnInit(): void {
		this.route.url.subscribe((data) => {
			this.authType = data[data.length - 1].path;
			this.title = this.authType === 'login' ? 'Login to Lema' : 'Sign up';
			this.buttonTitle = this.authType === 'login' ? 'Login' : 'Sig Up';

			if (this.authType === 'register') {
				this.authForm.addControl('username', new FormControl());
			}
		});
	}

	testFunction(): void {
		const uid = 'B8zexTNnf8UwBvkIa6L3zci6Ot83';
		this.authService.GetLoggedInUser().subscribe((x) => {
			console.log(x);
		});
	}

	submitForm(): void {
		this.isSubmitting = true;
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const credentials: Credentials = this.authForm.value;

		if (this.authType === 'register') {
			void this.authService
				.SignUp(credentials.email, credentials.password, credentials.username)
				.then(() => {
					this.isSubmitting = false;
				})
				.catch(() => {
					this.isSubmitting = false;
				});
		} else {
			void this.authService
				.SignIn(credentials.email, credentials.password)
				.then(() => {
					this.isSubmitting = false;
				})
				.catch(() => {
					this.isSubmitting = false;
				});
		}
	}
}
