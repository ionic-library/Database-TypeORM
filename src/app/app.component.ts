import { Component, ViewChild }			from '@angular/core';
import { Platform }						from 'ionic-angular';
import { Nav, MenuController }			from 'ionic-angular';

import { StatusBar }					from '@ionic-native/status-bar';
import { SplashScreen }					from '@ionic-native/splash-screen';

import { createConnection }				from 'typeorm';

import { Post }							from '../blocks/typeorm/entities/post';
import { Category }						from '../blocks/typeorm/entities/category';
import { Author }						from '../blocks/typeorm/entities/author';

@Component({
	templateUrl: 'app.html'
})
export class MainApp {
	@ViewChild(Nav) nav: Nav;

	rootPage = 'TabsPage';
	pages: Array<{ title: string, component: any }>;

	constructor(
		public platform: Platform,
		public menu: MenuController,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen
	) {
		this.initializeApp();

		this.initializeConnection();

		this.pages = [
			{ title: 'Hello Ionic', component: 'HomePage' },
			{ title: 'My First List', component: 'ListPage' }
		];
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	async initializeConnection() {
		if (this.platform.is('cordova')) {
			await createConnection({
				type: 'cordova',
				database: 'test',
				location: 'default',
				logging: ['error', 'query', 'schema'],
				synchronize: true,
				entities: [
					Author,
					Category,
					Post
				]
			});
		} else {
			await createConnection({
				type: 'sqljs',
				autoSave: true,
				location: 'browser',
				logging: ['error', 'query', 'schema'],
				synchronize: true,
				entities: [
					Author,
					Category,
					Post
				]
			});
		}
	};


	openPage(page) {
		// close the menu when clicking a link from the menu
		this.menu.close();
		// navigate to the new page if it is not the current page
		this.nav.setRoot(page.component);
	}
}
