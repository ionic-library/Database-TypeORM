import { Component }					from '@angular/core';
import { IonicPage }					from 'ionic-angular';

import { NavController }				from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-demo4',
	templateUrl: 'demo4.html'
})
export class Demo4Page {

	constructor(public navCtrl: NavController) {
		console.log('Demo1Page::constructor')
	}

	ionViewDidLoad() {
		console.log('Demo1Page::ionViewDidLoad')
	}
}
