import { Component }					from '@angular/core';
import { IonicPage }					from 'ionic-angular';

@IonicPage()
@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {

	tabHome = 'HomePage';
	tabAbout = 'AboutPage';
	tabContact = 'ContactPage';

	constructor() {

	}
}
