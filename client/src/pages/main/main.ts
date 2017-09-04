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
  email:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {

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

  }
  onSelectImage(){

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