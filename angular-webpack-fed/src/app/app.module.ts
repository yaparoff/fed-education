import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

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
import { CategoriesService, PopupService, SidebarService } from './services';
import { SortingPipe } from './pipes';

@NgModule({
  imports: [ 
    BrowserModule, // приложение должно запускаться в браузере
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule
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
    PopupComponent,
    SortingPipe
  ],
  providers: [
    CategoriesService,
    PopupService,
    SidebarService
  ],
  bootstrap: [ // определяет главный компонент приложения который создает и добавляет Angular 2 в  index.html
    AppComponent
  ]
})
export class AppModule { };
