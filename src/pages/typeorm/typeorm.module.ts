import { NgModule }						from '@angular/core';
import { IonicPageModule }				from 'ionic-angular';
import { TypeORMPage }					from './typeorm';

@NgModule({
	declarations: [
		TypeORMPage,
	],
	imports: [
		IonicPageModule.forChild(TypeORMPage),
	],
	exports: [
		TypeORMPage
	]
})
export class TypeORMPageModule { }
