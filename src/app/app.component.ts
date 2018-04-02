import { Component, ViewChild }			from '@angular/core';
import { Platform, MenuController }		from 'ionic-angular';
import { Nav }							from 'ionic-angular';

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
		public splashScreen: SplashScreen) {
		console.log('MainApp::constructor')

		this.pages = [
			{ title: 'Home',		component: 'TabsPage' },
			{ title: 'List',		component: 'ListPage' },
			{ title: 'Demo 1',		component: 'Demo1Page' },
			{ title: 'Demo 2',		component: 'Demo2page' },
			{ title: 'Demo 3',		component: 'Demo3Page' },
			{ title: 'Demo 4',		component: 'Demo4page' },

		];


		this.initializeApp();
	}

	openPage(page) {
		console.log('MainApp::openPage ' + page.component)

		this.menu.close();
		this.nav.setRoot(page.component);
	}

	initializeApp() {
		console.log('MainApp::initializeApp')

		this.platform.ready().then(async () => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();

			if (this.platform.is('cordova')) {
				await createConnection({
					type: 'cordova',
					database: 'test',
					location: 'default',
					logging: ['error', 'query', 'schema'],
					synchronize: true,
					entities: [Author, Category, Post]
				});
			} else {
				await createConnection({
					type: 'sqljs',
					autoSave: true,
					location: 'browser',
					logging: ['error', 'query', 'schema'],
					synchronize: true,
					entities: [Author, Category, Post]
				});
			}
		});
	}
}

