/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

	constructor(private route: ActivatedRoute, private fb: FormBuilder) {
		this.authForm = fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	ngOnInit() {
		this.route.url.subscribe((data) => {
			this.authType = data[data.length - 1].path;
			this.title = this.authType === 'login' ? 'Login to Lema' : 'Sign up';
			this.buttonTitle = this.authType === 'login' ? 'Login' : 'Sig Up';
			if (this.authType === 'register') {
				this.authForm.addControl('username', new FormControl());
			}
		});
	}

	submitForm() {
		this.isSubmitting = true;
	}
}
