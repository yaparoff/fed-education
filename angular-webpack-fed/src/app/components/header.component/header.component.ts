import { Component, ViewChild } from '@angular/core';
import { PopupComponent} from "../popup.component/popup.component";

@Component({
  selector: 'shp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { 
  @ViewChild(PopupComponent) // Для получения доступа к дочернему компоненту
  popup: PopupComponent;

  showPopup() {
      this.popup.show();
  }


  // public visible: boolean = false;

  // toggleView() {
  //     this.visible = true;
  // }
};