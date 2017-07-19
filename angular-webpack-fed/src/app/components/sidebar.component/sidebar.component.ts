import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'shp-sidebar-menu',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    class: 'shp-sidebar-menu'
  }
})

export class SidebarComponent {
  @Input() categories: any;
  @Output() changeCategory = new EventEmitter();    //в свойстве хранится объект, который будет генерировать события
  

  constructor(private categoriesService: CategoriesService) { }

  public ngOnInit(): void {
    this.categories = this.categoriesService.getCategories();
  }

  onChangeCategory(categoryId: number){
    console.log(categoryId);
      this.changeCategory.emit(categoryId); //вызывает метод из родительского компонента
  }
  // public categories: Observable<any>;

  
};