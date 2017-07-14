import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';
import { 
  AppComponent,
  CategoriesComponent,
  CategoryComponent,
  GoodsListComponent,
  NoContentComponent,
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  PopupComponent
} from './components';
import { CategoriesService } from './services';

@NgModule({
  imports: [ 
    BrowserModule, // приложение должно запускаться в браузере
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [ // определяет что в этом модуле есть
    AppComponent,
    CategoriesComponent,
    CategoryComponent,
    GoodsListComponent,
    NoContentComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PopupComponent
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [ // определяет главный компонент приложения который создает и добавляет Angular 2 в  index.html
    AppComponent
  ]
})
export class AppModule { };
