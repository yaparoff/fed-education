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

  public signData = {
      "email": "",
      "password": "",
      "isRemember": false
  }
  public regData = {
      "email": "",
      "password": "",
  }

  show() {
      this.visible = true;
  }
  closePopup() {
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
  emailValidation() {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(this.regData.email)){
      this.isValidEmail = true;
    } else {
      this.isValidEmail = false;
    }
  }
  passwordValidation() {
    if (this.regData.password.length >= 3) {
      this.isValidPassword = true;
    } else {
      this.isValidPassword = false;
    }
  }
  
};