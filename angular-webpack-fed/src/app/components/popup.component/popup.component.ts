import { Component } from '@angular/core';

@Component({
  selector: 'shp-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent { 
  private visible: boolean = false;
  private reisterFormVisible: boolean = false;
  private signFormVisible: boolean = true;
  private isValidEmail: boolean = true;
  private isValidPassword: boolean = false;

  show() {
      this.visible = true;
  }
  closePopup() {
    console.log(this.visible);
    this.visible = !this.visible;
    this.isValidEmail = true;
    this.isValidPassword = true;
  }
  showRegisterForm(){
    this.reisterFormVisible = true;
    this.signFormVisible = false;
    this.isValidEmail = true;
    this.isValidPassword = true;
  }
  showSignForm(){
    this.reisterFormVisible = false;
    this.signFormVisible = true;
    this.isValidEmail = true;
    this.isValidPassword = true;
  }
  emailValidation(email: any) {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(email)) {
      this.isValidEmail = true;
    } else {
      this.isValidEmail = false;
    }
  }
  passwordValidation(password: any) {
    console.log(password.length);
    if (password.length >= 3) {
      this.isValidPassword = true;
    } else {
      this.isValidPassword = false;
    }
  }
  
};