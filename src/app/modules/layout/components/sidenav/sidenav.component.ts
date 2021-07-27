import { Component } from '@angular/core';

@Component({
	selector: 'lema-sidenav',
	templateUrl: './sidenav.component.html',
})
export class SidenavComponent {
	mobileMenu = false;

	toggleMobileMenu(): void {
		this.mobileMenu = !this.mobileMenu;
	}
}
