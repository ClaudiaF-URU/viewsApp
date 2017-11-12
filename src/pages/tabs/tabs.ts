import { ThirdPage } from './../third/third';
import { SecondPage } from './../second/second';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SecondPage;
  tab3Root = ThirdPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 

}
