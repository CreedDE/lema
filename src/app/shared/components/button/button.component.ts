import { Component, ElementRef, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

class _ButtonBase {
	constructor(public _elementRef: ElementRef) {}
}

const HOST_CLASSES = ['lema-button', 'disabled:opacity-50', 'disabled:cursor-not-allowed'];

@Component({
	selector: 'button[lema-button]',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class LemaButtonComponent extends _ButtonBase implements OnInit {
	constructor(elementRef: ElementRef) {
		super(elementRef);
	}

	ngOnInit() {
		for (const host of HOST_CLASSES) {
			(this._getHostElement() as HTMLElement).classList.add(host);
		}
	}

	_getHostElement(): unknown {
		return this._elementRef.nativeElement;
	}
}

@Component({
	selector: 'a[lema-button]',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class LemaAnchorComponent extends LemaButtonComponent {
	constructor(elementRef: ElementRef) {
		super(elementRef);
	}
}
