import { NgModule } from '@angular/core';
import { environment } from '@env/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
	imports: [
		StoreModule.forRoot({}),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
			autoPause: true,
		}),
	],
	declarations: [],
})
export class RootStoreModule {}
