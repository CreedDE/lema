import { User } from '@app/shared/models/user.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const featureAdapter: EntityAdapter<User> = createEntityAdapter<User>({
	selectId: (model) => model.uid,
	sortComparer: (a: User, b: User): number => b.uid.localeCompare(a.uid),
});

export interface State extends EntityState<User> {
	isLoading?: boolean;
	error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
	isLoading: false,
	error: null,
});
