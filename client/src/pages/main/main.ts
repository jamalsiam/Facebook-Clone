import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera } from 'ionic-native';
import { Geolocation } from '@ionic-native/geolocation';

import { ProjectService } from '../../app/app.service'
import { ProfilePage } from './../profile/profile';
import { UserPage } from './../user/user';
import { User } from './../user/useremail';


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
  email:string;
  postText:string;
  base64Image:string;
  locationLat:number;
  locationLong:number;
  posts:any;
  apps:string="favsStory";
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              private geolocation: Geolocation,
              private projectService:ProjectService,
              public user:User) {

   this.storage.get('email').then((val) => {

    this.email=val;
  });
 }

 ionViewDidLoad() {
  console.log('ionViewDidLoad MainPage');
  }
  onViewProfilePage(){
  this.navCtrl.push(ProfilePage);
  }
  getPost(typeRequest:string){
    if(typeRequest=='allStory')
    {
       this.getAllPost()
    }
    else if(typeRequest=='favsStory')
    {
        console.log(typeRequest)
    } 
    else
    { 
      this.getProfilePost(this.email)
        console.log(typeRequest)
    }
  }

  onNavigate(){
    this.geolocation.getCurrentPosition()
      .then((location) => {
        console.log('location fetched successfully ' + location);
        
          this.locationLat=location.coords.latitude,
          this.locationLong=location.coords.longitude
        
        console.log("Location data fetched correctly!!");
      })
      .catch((err) => {
        console.log('An error ocurred');
          });
    
  }
  onSelectImage(){
    Camera.getPicture({
      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
 
    })
  }
  
  onPostData(){
    this.projectService.onPostData({email:this.email,
                                    postText:this.postText,
                                    image:this.base64Image,
                                    latitude:this.locationLat,
                                    longitude:this.locationLong
                                  })
    .subscribe(data=>{
      this.postText=""
      this.base64Image=undefined
      this.locationLat=undefined
      this.locationLong=undefined
      this.getPost("myStory")
      this.apps="myStory"

    })
    
  }
  getFavPost(email:string){
    this.posts=undefined;
    this.projectService.getFavPost({email:email})
    .subscribe(data=>{
      this.posts=data.record;
      console.log(data)
    })
  }
  getAllPost(){
    this.posts=undefined;
    this.projectService.getAllPost()
    .subscribe(data=>{
      this.posts=data.record;
      console.log(data)
    })
  }
  getProfilePost(email:string){
    this.posts=undefined;
    this.projectService.getProfilePost({email:email})
    .subscribe(data=>{
      this.posts=data.record;
      console.log(data)
    })
  }
  onClickVisitUser(email:string){
    if(email==this.email)
    {
      this.navCtrl.push(ProfilePage)
    }
    else
    {
      this.user.setUserEmail(""+email);
      this.navCtrl.push(UserPage)
    }

  }
  


}