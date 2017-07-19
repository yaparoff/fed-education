import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import {Http} from '@angular/http';
import * as CATEGORIES from '../mocks/categories.json';
import * as PRODUCTS from '../mocks/products.json';

// декоратор, которые определяет что класс, является доступным для создание через Injector. 

// Если мы хотим создать сервис, мы должны создать класс и пометить этот класс спец декоратором @Injectable()
@Injectable()
export class CategoriesService {
  private categories: any;
  private products: any;

  // constructor() {
  //   this.categories = CATEGORIES;
  //   this.products = PRODUCTS;
  // } 

  constructor(private http: Http){ } 

  public getProducts(id: number): Observable<any> {
    return this.http.get('http://localhost:3004/products')
    .map((res) => res.json())
    .map((products) => products.filter((product: any) => product.categoryId === +id))
    // .map((res) => res.json())
    // .flatMap()
    // .filter(
    //   (product: any) => {
    //     console.log(product.categoryId);

    //     return product.categoryId === +id;
    //   });
  }

  public getCategories(): Observable<any> {
    return this.http.get('http://localhost:3004/categories').map((res) => res.json());
  }
  

  // public getCategories(): Observable<any> {
  //   return Observable.create((observer: Observer<any>) => {
  //     observer.next(this.categories);
  //   })
  //   .delay(500);
  // }

  // public getCategory(id: number): Observable<any> {
  //   let category = this.products.filter((product: any) => {
  //     return product.categoryId === id;
  //   });

  //   return Observable.create((observer: Observer<any>) => {
  //     observer.next(category);
  //   })
  //   .delay(500);
  // }

/*
  //  public getCategory(id: number){
  //   for (let i = 0; i < this.categories.length; i++){
  //       if (this.categories[i]['categoryId'] === id){
  //           console.log(this.categories[i]['items']);
  //           return this.categories[i]['items'];
  //       }
  //   }
  // }
  */
};
