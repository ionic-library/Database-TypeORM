import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';
import { Demo3Page }					from './demo3';

@NgModule({
	declarations: [Demo3Page],
	imports: [IonicPageModule.forChild(Demo3Page)],
	exports: [Demo3Page]
})
export class Demo3PageModule { }
