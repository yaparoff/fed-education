import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sorting'})
export class SortingPipe implements PipeTransform {
  transform(data: any, typeOfSort: string) {
    console.log(data, typeOfSort);
    let result;
    if (!data || !typeOfSort) {
      return data
    }
    switch(typeOfSort){
      case "Default (a-z)":
        result = data.sort(function (a: any, b: any){
          if (a.name > b.name){
            return 1;
          }
          if (a.name < b.name)
            return -1;
          else return 0;
          });
        break;
      case "Name (z-a)":
        result = data.sort(function (a: any, b: any){
          if (a.name < b.name){
            return 1;
          }
          if (a.name > b.name)
            return -1;
          else return 0;
        });
        break;
      case "Price ▲":
        result = data.sort(function (a: any, b: any){
          return a.price - b.price;
        });
        break;
      case "Price ▼":
        result = data.sort(function (a: any, b: any){
          return b.price - a.price;
        });
        break;
    }
    return result;
	}
}