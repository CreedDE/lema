import { Injectable } from '@angular/core';
import { Alert, AlertType } from '@app/shared/models/alert.model';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class AlertService {
	private subject = new Subject<Alert>();
	private defaultId = 'lema-alert';

	onAlert(id = this.defaultId): Observable<Alert> {
		return this.subject.asObservable().pipe(filter((x) => x && x.id === id));
	}

	success(message: string, headerMessage?: string, options?: any): void {
		this.alert(new Alert({ ...options, type: AlertType.Success, headerMessage, message }));
	}

	info(message: string, headerMessage?: string, options?: any): void {
		this.alert(new Alert({ ...options, type: AlertType.Info, headerMessage, message }));
	}

	warn(message: string, headerMessage?: string, options?: any): void {
		this.alert(new Alert({ ...options, type: AlertType.Warning, headerMessage, message }));
	}

	error(message: string, headerMessage?: string, options?: any): void {
		this.alert(new Alert({ ...options, type: AlertType.Error, headerMessage, message }));
	}

	alert(alert: Alert): void {
		alert.id = alert.id || this.defaultId;
		this.subject.next(alert);
	}

	clear(id = this.defaultId): void {
		this.subject.next(new Alert({ id }));
	}
}
