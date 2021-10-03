import { User } from '@app/shared/models/user.model';
import { Action } from '@ngrx/store';

export enum ActionTypes {
	LOAD_REQUEST = '[USER] Load Request',
	LOAD_FAILURE = '[USER] Load Failure',
	LOAD_SUCCESS = '[USER] Load Success',
}

export class LoadRequestAction implements Action {
	readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
	readonly type = ActionTypes.LOAD_FAILURE;
	constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
	readonly type = ActionTypes.LOAD_SUCCESS;
	constructor(public payload: { item: User }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
