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
  posts:any;
  userName:string;
  userEmail:string;
  mobile:string;
  status:string;
  image:string;
  
  constructor( public navCtrl: NavController,
   public navParams: NavParams,
   public user:User,
   public projectService:ProjectService) {
    this.projectService.getUserInfo({email:this.user.getUserEmail()})
    .subscribe(data=>{
      console.log(data.data)
      this.userName=data.data.name;
      this.userEmail=data.data.email;
      this.mobile=data.data.mobile;
      this.status=data.data.status;
      this.image=data.data.image;
      this.posts=data.data.post;
    }) 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
