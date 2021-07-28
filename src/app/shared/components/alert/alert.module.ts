import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { AlertComponent } from './alert.component';
import { AlertService } from './services/alert.service';

@NgModule({
	imports: [SharedModule],
	providers: [AlertService],
	declarations: [AlertComponent],
	exports: [AlertComponent],
})
export class AlertModule {}
