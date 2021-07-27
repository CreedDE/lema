import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./modules/auth/auth.module').then((a) => a.AuthModule),
	},
	{
		path: 'home',
		loadChildren: () => import('./modules/layout/layout.module').then((l) => l.LayoutModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
