import { Injectable } from '@angular/core';
import { FirebaseAuthService } from '@app/shared/services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import * as featureActions from './actions';

@Injectable()
export class UserStoreEffects {
	constructor(private authService: FirebaseAuthService, private actions$: Actions) {}

	loadRequestEffect$: Observable<Action> = createEffect(() => {
		return this.actions$.pipe(
			ofType<featureActions.LoadRequestAction>(featureActions.ActionTypes.LOAD_REQUEST),
			startWith(new featureActions.LoadRequestAction()),
      switchMap(action => )
		);
	});
}
