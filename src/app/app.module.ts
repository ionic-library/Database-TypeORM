import { BrowserModule }				from '@angular/platform-browser';
import { NgModule, ErrorHandler }		from '@angular/core';
import { IonicApp }						from 'ionic-angular';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MainApp }						from './app.component';

import { StatusBar }					from '@ionic-native/status-bar';
import { SplashScreen } 				from '@ionic-native/splash-screen';

@NgModule({
	declarations: [
		MainApp
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MainApp),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MainApp
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
