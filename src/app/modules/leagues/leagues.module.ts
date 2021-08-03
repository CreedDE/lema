import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { LeaguesRoutingModule } from './leagues-routing.module';
import { LeaguesComponent } from './leagues.component';

@NgModule({
	imports: [SharedModule, LeaguesRoutingModule],
	providers: [],
	declarations: [LeaguesComponent],
	exports: [LeaguesComponent],
})
export class LeaguesModule {}
