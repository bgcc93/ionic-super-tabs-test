import { Component } from '@angular/core';
import { NavController, ItemSliding, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  toggleLeftMenu() {
    this.menuCtrl.toggle(`left`);
  }
  
  toggleRightMenu() {
    this.menuCtrl.toggle('right');
  }


  log(item: ItemSliding) {
    console.log(item);
  }

  archive(item: ItemSliding) {
    item.close();
  }

}
