import { Component, OnInit } from '@angular/core';
import { Response} from '@angular/http';
import { CategoriesService, HttpService } from '../../services';
import { Observable } from 'rxjs';
import {Http} from '@angular/http';

@Component({
  selector: 'shp-categories-list',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [HttpService],
  host: {
    class: 'shp-categories-list'
  }
})
export class CategoriesComponent implements OnInit {
  id: number;
  name: string;
  image: string;
  private categories: any;

  constructor(private categoriesService: CategoriesService){ }

  public ngOnInit(): void {
    this.categories = this.categoriesService.getCategories()
    //.subscribe((x) => console.log(x));
  }

  // public categories: Observable<any>;

  // constructor(private categoriesService: CategoriesService) { }

  // public ngOnInit(): void {
  //   this.categories = this.categoriesService.getCategories();
  // }
};