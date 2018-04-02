import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';
import { Demo4Page }					from './demo4';

@NgModule({
	declarations: [Demo4Page],
	imports: [IonicPageModule.forChild(Demo4Page)],
	exports: [Demo4Page]
})
export class Demo4PageModule { }
