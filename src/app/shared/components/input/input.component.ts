import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

class _InputBase {
	constructor(public _elementRef: ElementRef) {}
}

const HOST_CLASSES = [
	'lema-input',
	'focus:ring-purple-500',
	'focus:border-purple-500',
	'border-gray-300',
	'dark:bg-black-600',
	'dark:border-black-300',
	'dark:text-white-500',
	'dark:placeholder-white-500',
	'disabled:opacity-50',
	'disabled:cursor-not-allowed',
];

@Component({
	selector: 'input[lema-input]',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class LemaInputComponent extends _InputBase implements OnInit {
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
