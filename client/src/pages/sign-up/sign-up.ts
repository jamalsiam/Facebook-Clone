import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ProjectService } from '../../app/app.service';
import { HomePage } from './../home/home';
/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
 	msg:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,private projectService:ProjectService,private storage: Storage) {
  }
  signUp(name:string,mobile:string,email:string,password:string){
  	this.msg="";
  	this.projectService.signUp({name:name,
  								mobile:mobile,
  								email:email,
  								password:password})
  	.subscribe(datas =>{
 			if (datas=="signup") {
 				this.storage.set(`email ${ email }`, email);
 				this.navCtrl.push(HomePage)
 			}
 			else
 				this.msg=datas;

 		})

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

}
