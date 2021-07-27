import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
	imports: [SharedModule, LayoutRoutingModule],
	providers: [],
	declarations: [LayoutComponent, SidenavComponent],
	exports: [LayoutComponent, SidenavComponent],
})
export class LayoutModule {}
