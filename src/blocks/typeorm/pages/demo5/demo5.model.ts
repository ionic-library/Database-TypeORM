import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';
import { Demo5Page }					from './demo5';

@NgModule({
	declarations: [Demo5Page],
	imports: [IonicPageModule.forChild(Demo5Page)],
	exports: [Demo5Page]
})
export class Demo5PageModule { }
