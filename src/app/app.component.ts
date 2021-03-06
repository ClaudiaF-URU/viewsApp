import { HomePage } from './../pages/home/home';
import { ThirdPage } from './../pages/third/third';
import { SecondPage } from './../pages/second/second';
import { TabsPage } from './../pages/tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = HomePage;

  // DESCOMENTAR PARA USAR LA NAVIGACION POR TABS
  // rootPage:any = TabsPage;
  
  pages: Array<{name: string, component: any}>;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      { name: 'Home', component: HomePage },
      { name: 'Second', component: SecondPage },
      { name: 'Third', component: ThirdPage }
    ];
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

