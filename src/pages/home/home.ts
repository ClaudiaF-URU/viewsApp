import { ThirdPage } from './../third/third';
import { SecondPage } from './../second/second';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 
  allPages: Array<{name: string, component: any}>;
  
  constructor(public navCtrl: NavController) {
    this.allPages=[
      {
        name:'Pagina 2',
        component:SecondPage
      },
      {
        name:'Pagina 3',
        component:ThirdPage
      }
    ]

    
   
  }
  goTo(page){
    this.navCtrl.push(page);    
  }

  // goToSecondPage() {
  //   this.navCtrl.push(SecondPage);
  // }

  // goToThirdPage() {
  //   this.navCtrl.push(ThirdPage);
  // }

}
