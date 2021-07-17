import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
	selector: 'lema-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor(private matIconRegistry: MatIconRegistry) {
		matIconRegistry.registerFontClassAlias('fas');
		matIconRegistry.registerFontClassAlias('fal');
		matIconRegistry.registerFontClassAlias('fab');
	}
	title = 'lema';
}
