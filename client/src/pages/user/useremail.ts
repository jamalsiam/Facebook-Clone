export class User{
	userEmail:string;
	constructor(){}
	setUserEmail(email:string){
		this.userEmail=email
	}
	getUserEmail(){
		return this.userEmail;
	}
}