import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "./useremail"
/**
 * Generated class for the UserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
	 
	
  constructor( public navCtrl: NavController, public navParams: NavParams,public user:User) {
  console.log(this.user.getUserEmail())
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
