const version = require('../../package.json').version;

export const environment = {
	production: true,
	appVersion: `${version}`,
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
