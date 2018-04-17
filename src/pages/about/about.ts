import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  toggleLeftMenu() {
    this.menuCtrl.toggle(`left`);
  }
  
  toggleRightMenu() {
    this.menuCtrl.toggle('right');
  }

}
