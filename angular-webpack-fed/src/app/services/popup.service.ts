import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import * as CATEGORIES from '../mocks/categories.json';
import * as PRODUCTS from '../mocks/products.json';

@Injectable()
export class PopupService {
  private categories: any;
  private products: any;

  constructor() {
    this.categories = CATEGORIES;
    this.products = PRODUCTS;
  } 

  public getCategories(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      observer.next(this.categories);
    })
    .delay(500);
  }

  public getCategory(id: number): Observable<any> {
    let category = this.products.filter((product: any) => {
      return product.categoryId === id;
    });

    return Observable.create((observer: Observer<any>) => {
      observer.next(category);
    })
    .delay(500);
  }
}