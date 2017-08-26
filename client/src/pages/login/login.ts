import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from './../sign-up/sign-up';
import { ProjectService } from '../../app/app.service';
import { Storage } from '@ionic/storage';
import { HomePage } from './../home/home';
import { MainPage } from './../main/main';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-login',
 	templateUrl: 'login.html',
 })
 export class LoginPage {

 	msg:string="";
 	constructor(public navCtrl: NavController, public navParams: NavParams,private projectService:ProjectService,private storage: Storage) {
 	}

 	logIn(email:string,pass:string){
 		this.msg=""
 		this.projectService.logIn({email:email,
 			password:pass})
 		.subscribe(datas =>{
 			if (datas=="signin") {
 				this.storage.set('email', email);
 				this.navCtrl.push(MainPage)
 			}
 			else
 				this.msg=datas;

 		})


 	}
 	ionViewDidLoad() {
 		this.storage.get('email').then((val) => {
    		if (val) {

 				this.navCtrl.push(MainPage)
 				this.navCtrl.setRoot(this.navCtrl.getActive().component);
    		}
  		});
 		console.log('ionViewDidLoad LoginPage');
 	}
 	siginUp(){
 		this.navCtrl.push(SignUpPage)
 	}

 }
