// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const version = require('../../package.json').version;

export const environment = {
	production: false,
	appVersion: `${version}-dev`,
	firebase: {
		apiKey: 'AIzaSyCKRr3Kx2xFvU1KHAJlcXxReyczjf38EmY',
		authDomain: 'lema-31428.firebaseapp.com',
		projectId: 'lema-31428',
		storageBucket: 'lema-31428.appspot.com',
		messagingSenderId: '568814490862',
		appId: '1:568814490862:web:43d888acce9365fcaf8fff',
		measurementId: 'G-8JCYK6KRSZ',
	},
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
