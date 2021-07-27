import { Component, HostListener, OnInit } from '@angular/core';

@Component({
	selector: 'lema-sidenav',
	templateUrl: './sidenav.component.html',
})
export class SidenavComponent implements OnInit {
	mobileMenu = false;
	isMobile = false;

	screenWidth: number;

	ngOnInit(): void {
		this.screenWidth = window.innerWidth;
		if (window.innerWidth <= 1024) {
			this.isMobile = true;
		}
	}

	toggleMobileMenu(): void {
		this.mobileMenu = !this.mobileMenu;
	}

	@HostListener('window:resize', ['$event'])
	onResize(): void {
		this.screenWidth = window.innerWidth;
		if (window.innerWidth <= 1024) {
			this.isMobile = true;
		} else {
			this.isMobile = false;
		}
	}
}
