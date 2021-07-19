/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '@shared/models/user.model';

@Injectable({
	providedIn: 'root',
})
export class FirebaseAuthService {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	userState: any;
	constructor(
		private afs: AngularFirestore,
		private afAuth: AngularFireAuth,
		private router: Router,
		private ngZone: NgZone
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
		return this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
			this.ngZone.run(() => {
				//TODO: create a route that exist where you can navigate after the login
				// void this.router.navigate(['dashboard']);
				console.log(`=========Response=========`);
				console.log(result);
				window.alert('successfull logged in');
			});
			void this.SetUserData(result.user);
		});
	}

	SignUp(email: string, password: string): Promise<void> {
		return this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => {
			void this.SendVerificationMail();
			void this.SetUserData(result.user);
		});
	}

	SendVerificationMail(): Promise<void> {
		return this.afAuth.currentUser
			.then((u) => u?.sendEmailVerification())
			.then(() => {
				void this.router.navigate(['email-verification']);
			});
	}

	ForgotPassword(resetEmail: string): Promise<void> {
		return this.afAuth
			.sendPasswordResetEmail(resetEmail)
			.then(() => {
				//TODO: build shared dialog component for that case
				window.alert('Password reset email sent.');
			})
			.catch((error) => {
				window.alert(error);
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
