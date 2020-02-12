import { Component } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nyt';
  products = [];
  values:any;
  popup = false;
  image:any;
  head:any;
  detail:any;
  constructor(private dataService: DataService) { }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data.response.docs);
      this.products = data.response.docs;
    });
  }
  onKey(event) {
    this.values = event.target.value;
    if (this.values.length > 4) {
      console.log(this.values);
      this.dataService.sendGetSearchRequest(this.values).subscribe((data: any[]) => {
        console.log(data.response.docs);
        this.products = data.response.docs;
      });
    } else {

    }
  }
  openPop(image, headline , abstract) {
    this.popup = true;
    console.log(image, headline , abstract);
    this.image = image;
    this.head = headline;
    this.detail = abstract;
  }
  closePop() {
    this.popup = false;
  }

}
