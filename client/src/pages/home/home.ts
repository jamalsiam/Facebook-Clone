import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectService } from '../../app/app.service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	something:string="";
  constructor(public navCtrl: NavController ,private projectService:ProjectService) {
  		navCtrl.push(LoginPage)
this.projectService.getMethod()
  		.subscribe(datas =>{
			console.log(datas);
			this.something=datas.name;
		})

  }

}
