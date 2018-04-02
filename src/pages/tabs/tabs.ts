import { Component }					from '@angular/core';
import { IonicPage }					from 'ionic-angular';

@IonicPage()
@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {

	tabHome = 'HomePage';
	tabDemo1 = 'Demo1Page';
	tabDemo2 = 'Demo2Page';
	tabDemo3 = 'Demo3Page';
	tabDemo4 = 'Demo4Page';

	constructor() {
		console.log('TabsPage::constructor')
	}
}
