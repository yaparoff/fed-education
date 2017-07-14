import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../services';

@Component({
  selector: 'shp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    class: 'shp-sidebar'
  }
})

export class SidebarComponent {
  // public categories: any;

  // constructor(private categoriesService: CategoriesService) { }

  // public ngOnInit(): void {
  //   this.categories = this.categoriesService.getCategories();
  // }
};