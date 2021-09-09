import { NgModule } from '@angular/core';
import { LemaAnchorComponent, LemaButtonComponent } from './button.component';

@NgModule({
	imports: [],
	providers: [],
	declarations: [LemaButtonComponent, LemaAnchorComponent],
	exports: [LemaButtonComponent, LemaAnchorComponent],
})
export class LemaButtonModule {}
