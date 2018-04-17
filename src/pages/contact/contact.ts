import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  toggleLeftMenu() {
    this.menuCtrl.toggle(`left`);
  }
  
  toggleRightMenu() {
    this.menuCtrl.toggle('right');
  }


}
