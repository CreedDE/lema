import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '@env/environment';
import { AlertModule } from './shared/components/alert/alert.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule,
		AppRoutingModule,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFirestoreModule,
		AlertModule,
		StoreModule.forRoot({}, {}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
