import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ProfilePage } from './../profile/profile';

/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {
 
	this.storage.get('email').then((val) => {
    console.log(val);
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  onViewProfilePage(){
    this.navCtrl.push(ProfilePage);
  }

}