import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'shp-categories-list',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  host: {
    class: 'shp-categories-list'
  }
})
export class CategoriesComponent implements OnInit {
  public categories: Observable<any>;

  constructor(private categoriesService: CategoriesService) { }

  public ngOnInit(): void {
    this.categories = this.categoriesService.getCategories();
  }
};