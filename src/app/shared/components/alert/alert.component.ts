import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alert, AlertType } from '@app/shared/models/alert.model';
import { AlertService } from './services/alert.service';

@Component({
	selector: 'lema-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy {
	@Input() id = 'lema-alert';

	alerts: Alert[] = [];
	alertSubscription: Subscription;
	icon = '';
	set = '';

	constructor(private alertService: AlertService) {}

	ngOnInit(): void {
		this.alertSubscription = this.alertService.onAlert(this.id).subscribe((alert) => {
			if (!alert.message) {
				this.alerts = this.alerts.filter((x) => x.keepAfterRouteChange);

				this.alerts.forEach((x) => delete x.keepAfterRouteChange);
				return;
			}

			this.alerts.push(alert);

			if (alert.type === AlertType.Info) {
				this.icon = 'fa-info';
				this.set = 'fas';
			} else if (alert.type === AlertType.Warning) {
				this.icon = 'fa-exclamation';
				this.set = 'fas';
			} else if (alert.type === AlertType.Success) {
				this.icon = 'fa-check';
				this.set = 'fas';
			} else if (alert.type === AlertType.Error) {
				this.icon = 'fa-times';
				this.set = 'fas';
			}

			if (alert.autoClose) {
				setTimeout(() => this.removeAlert(alert), 4500);
			}
		});
	}

	ngOnDestroy(): void {
		this.alertSubscription.unsubscribe();
	}

	removeAlert(alert: Alert): void {
		if (!this.alerts.includes(alert)) return;

		this.alerts = this.alerts.filter((x) => x !== alert);
	}

	cssBase(alert: Alert): unknown {
		if (!alert) return;
		const classes = [
			'bg-white-900',
			'dark:bg-black-600',
			'shadow-md',
			'rounded-md',
			'flex',
			'items-center',
			'py-2',
			'px-2',
		];

		return classes.join(' ');
	}

	cssBorder(alert: Alert): unknown {
		if (!alert) return;
		const classes = ['alert-border', 'mr-4'];

		const alertTypeClass = {
			[AlertType.Success]: 'bg-green-600',
			[AlertType.Info]: 'bg-blue-600',
			[AlertType.Warning]: 'bg-yellow-600',
			[AlertType.Error]: 'bg-red-600',
		};

		classes.push(alertTypeClass[alert.type]);

		return classes.join(' ');
	}

	cssIconBG(alert: Alert): unknown {
		if (!alert) return;
		const classes = ['mx-auto', 'flex', 'items-center', 'justify-center', 'h-8', 'w-8', 'rounded-full'];

		const alertTypeClass = {
			[AlertType.Success]: 'bg-green-100',
			[AlertType.Info]: 'bg-blue-100',
			[AlertType.Warning]: 'bg-yellow-100',
			[AlertType.Error]: 'bg-red-100',
		};

		classes.push(alertTypeClass[alert.type]);

		return classes.join(' ');
	}

	cssIcon(alert: Alert): unknown {
		if (!alert) return;
		const classes = ['h-6', 'w-6'];

		const alertTypeClass = {
			[AlertType.Success]: 'text-green-600',
			[AlertType.Info]: 'text-blue-600',
			[AlertType.Warning]: 'text-yellow-600',
			[AlertType.Error]: 'text-red-600',
		};

		classes.push(alertTypeClass[alert.type]);

		return classes.join(' ');
	}
}
