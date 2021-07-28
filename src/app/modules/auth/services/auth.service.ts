/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertService } from '@app/shared/components/alert/services/alert.service';
import { User } from '@shared/models/user.model';

@Injectable({
	providedIn: 'root',
})
export class FirebaseAuthService {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	userState: any;
	alertOptions = {
		autoClose: true,
		keepAfterRouteChange: false,
	};
	constructor(
		private afs: AngularFirestore,
		private afAuth: AngularFireAuth,
		private router: Router,
		private ngZone: NgZone,
		private alertService: AlertService
	) {
		this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.userState = user;
				localStorage.setItem('user', JSON.stringify(this.userState));
				JSON.parse(localStorage.getItem('user'));
			} else {
				localStorage.setItem('user', '');
				JSON.parse(localStorage.getItem('user'));
			}
		});
	}

	SignIn(email: string, password: string): Promise<void> {
		return this.afAuth
			.signInWithEmailAndPassword(email, password)
			.then((result) => {
				this.ngZone.run(() => {
					//TODO: create a route that exist where you can navigate after the login
					// void this.router.navigate(['dashboard']);
				});
				void this.SetUserData(result.user);
			})
			.catch((signinError) => {
				this.alertService.error(signinError.message, 'Uh, something went wrong', this.alertOptions);
			});
	}

	SignUp(email: string, password: string): Promise<void> {
		return this.afAuth
			.createUserWithEmailAndPassword(email, password)
			.then((result) => {
				void this.SendVerificationMail();
				void this.SetUserData(result.user);
			})
			.catch((signupError) => {
				this.alertService.error(signupError.message, 'Uh, something went wrong', this.alertOptions);
			});
	}

	SendVerificationMail(): Promise<void> {
		return this.afAuth.currentUser
			.then((u) =>
				u
					?.sendEmailVerification()
					.then(() => {
						this.alertService.success(
							'We send you an Email where you can verify your email again.',
							'Email verification completed',
							this.alertOptions
						);
					})
					.catch((error) => {
						this.alertService.error(error.message, 'Uh, something went wrong', this.alertOptions);
					})
			)
			.then(() => {
				void this.router.navigate(['email-verification']);
			});
	}

	ForgotPassword(resetEmail: string): Promise<void> {
		return this.afAuth
			.sendPasswordResetEmail(resetEmail)
			.then(() => {
				//TODO: build shared dialog component for that case
				this.alertService.success(
					'We send you an Email where you can reset your Password.',
					'Passwort reset completed',
					this.alertOptions
				);
			})
			.catch((errorMessage) => {
				this.alertService.error(errorMessage.message, 'Uh, something went wrong', this.alertOptions);
			});
	}

	SetUserData(user: User): Promise<void> {
		const userRef: AngularFirestoreDocument<unknown> = this.afs.doc(`users/${user.uid}`);
		const userState: User = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL,
			emailVerified: user.emailVerified,
		};
		return userRef.set(userState, { merge: true });
	}

	SignOut(): Promise<void> {
		return this.afAuth.signOut().then(() => {
			localStorage.removeItem('user');
			void this.router.navigate(['sign-in']);
		});
	}
}
