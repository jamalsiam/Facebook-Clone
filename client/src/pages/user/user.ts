import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  profileEmail:string;
  mobile:string;
  status:string;
  image:string;
  star:string;
  follower:number;
  following:number;

  constructor( public navCtrl: NavController,
              public navParams: NavParams,
              public user:User,
              public projectService:ProjectService,
              public storage: Storage) {

      this.storage.get('email').then((val) => {
      this.profileEmail= val;
      this.projectService.isFavorite({profileEmail:val,
                                      userEmail:this.user.getUserEmail()})
      .subscribe(data=>{
        if (data) {
          this.star="ios-star"
        }
        else
        {
          this.star="ios-star-outline"
        }
      })
    })
    this.projectService.getUserInfo({email:this.user.getUserEmail()})
    .subscribe(data=>{
      console.log(data.data)
      this.userName=data.data.name;
      this.userEmail=data.data.email;
      this.mobile=data.data.mobile;
      this.status=data.data.status;
      this.image=data.data.image;
      this.posts=data.data.post;
      this.following=data.data.following.length;
      this.follower=data.data.follower.length;

    }) 
  }

  onClickFavorite(){
    if (this.star=="ios-star-outline") {
        this.star="ios-star";
        this.follower++;
        this.projectService.addToFavorite({profileEmail:this.profileEmail,
                                          userEmail:this.user.getUserEmail(),
                                          sign:true})
        .subscribe(data=>{
          this.star="ios-star";
       })
    }
    else
    {
      this.follower--;
      this.star="ios-star-outline";
      this.projectService.addToFavorite({profileEmail:this.profileEmail,
                                      userEmail:this.user.getUserEmail(),
                                      sign:false})
      .subscribe(data=>{
        this.star="ios-star-outline";
       }) 
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
