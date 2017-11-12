import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  greeting:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.greeting='Hola';
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
