import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera } from 'ionic-native';
import { Geolocation } from '@ionic-native/geolocation';

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
  email:string;
  postText:string;
  base64Image:string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              private geolocation: Geolocation) {

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
       console.log(typeRequest)
    }
    else if(typeRequest=='allStory')
    {
        console.log(typeRequest)
    } 
    else
    {
        console.log(typeRequest)
    }
  }

  onNavigate(){
    this.geolocation.getCurrentPosition()
      .then((location) => {
        console.log('location fetched successfully ' + location);
        
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
    
  }
  getFavPost(email:string){

  }
  getAllPost(){

  }
  getProfilePost(email:string){

  }


}