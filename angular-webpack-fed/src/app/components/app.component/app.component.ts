import { Component } from '@angular/core';

@Component({
  selector: 'shp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [HttpService]
})
export class AppComponent {
  // constructor(private httpService: HttpService){}
  
  ngOnInit() {
      // this.httpService.getData().subscribe((data: Response) => this.user=data.json());
  }
};
