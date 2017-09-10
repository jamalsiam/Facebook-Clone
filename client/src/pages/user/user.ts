import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "./useremail"
import { ProjectService } from '../../app/app.service';
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
	 
	
  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               public user:User,
               public projectService:ProjectService) {
      this.projectService.getUserInfo({email:this.user.getUserEmail()})
      .subscribe(data=>{
        console.log(data)
      }) 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
