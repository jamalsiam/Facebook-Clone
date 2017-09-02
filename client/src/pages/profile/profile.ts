import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ImagePicker} from '@ionic-native/image-picker';
import { Camera } from 'ionic-native';
import { ProjectService } from '../../app/app.service';


/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-profile',
 	templateUrl: 'profile.html',
 })
 export class ProfilePage {
 	email:string="";
 	name:string;
 	status:string;
 	mobileNumber:string;
 	image:string;
 	base64Image:string;

 	constructor(public navCtrl: NavController,
 		public alertCtrl:AlertController,
 		public navParams: NavParams,
 		public projectService:ProjectService,
 		public storage: Storage) {
 		this.storage.get('email').then((val) => {
 			this.email= val;
 			this.getdata(val)
 		});
 	}

 	accessGallery(){
 		Camera.getPicture({
 			sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
 			destinationType: Camera.DestinationType.DATA_URL
 		}).then((imageData) => {
 			this.base64Image = 'data:image/jpeg;base64,'+imageData;
 			this.projectService.changeStatus({email:this.email,
 				image:this.base64Image})
 			.subscribe(datas =>{
 				this.getdata(this.email)
 			})
 		}, (err) => {
 			console.log(err);
 		});
 	}

 	changeName(){
 		let alert = this.alertCtrl.create({
 			title: 'Change Name',
 			inputs: [
 			{
 				name: 'name',
 				placeholder: this.name
 			}
 			],
 			buttons: [
 			{
 				text: 'Cancel',
 				role: 'cancel',
 				handler: data => {
 				}
 			},
 			{
 				text: 'Done',
 				handler: data => {
 					if (data.name) {
 						this.projectService.changeName({email:this.email,
 							name:data.name})
 						.subscribe(datas =>{
 							this.name=data.name;
 							this.getdata(this.email)
 						})
 					}
 				}
 			}
 			]
 		});
 		alert.present();
 	}

 	changeStatus(){
 		let alert = this.alertCtrl.create({
 			title: 'change Status',
 			inputs: [
 			{
 				name: 'status',
 				placeholder: this.status
 			}
 			],
 			buttons: [
 			{
 				text: 'Cancel',
 				role: 'cancel',
 				handler: data => {

 				}
 			},
 			{
 				text: 'Done',
 				handler: data => {

 					if (data.status) {
 						this.projectService.changeStatus({email:this.email,
 							status:data.status})
 						.subscribe(datas =>{
 							this.status=data.status;
 							this.getdata(this.email)
 						})
 					}
 				}
 			}
 			]
 		});
 		alert.present();
 	}

 	changeMobileNumber(){
 		let alert = this.alertCtrl.create({
 			title: 'Change Mobile Number',
 			inputs: [
 			{
 				name: 'mobile',
 				placeholder: this.mobileNumber
 			}
 			],
 			buttons: [
 			{
 				text: 'Cancel',
 				role: 'cancel',
 				handler: data => {

 				}
 			},
 			{
 				text: 'Done',
 				handler: data => {
 					console.log(data.mobile)
 					if (data.mobile) {
 						this.projectService.changeMobileNumber({email:this.email,
 							mobile:data.mobile})
 						.subscribe(datas =>{
 							this.mobileNumber=data.mobile;
 							this.getdata(this.email)
 						})
 					}
 				}
 			}
 			]
 		});
 		alert.present();
 	}
 	
 	getdata(email:string){
 		this.projectService.getProfileInfo({email:email})
 		.subscribe(datas =>{
 			console.log(datas)
 			this.name=datas.user.name;
 			this.mobileNumber=datas.user.mobile;
 			this.status=datas.user.status;
 			this.base64Image=datas.user.image;
 		})
 	}
}
