import { Component }					from '@angular/core';
import { IonicPage }					from 'ionic-angular';

import { NavController }				from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-demo2',
	templateUrl: 'demo2.html'
})
export class Demo2Page {

	constructor(public navCtrl: NavController) {
		console.log('Demo1Page::constructor')
	}

	ionViewDidLoad() {
		console.log('Demo1Page::ionViewDidLoad')
	}
}
