import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

/*
  private REST_API_SERVER = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=2opniGDhCxWrHR84Em9unDdK39WTVx2f';
*/

    private REST_API_SERVER = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=donald&api-key=2opniGDhCxWrHR84Em9unDdK39WTVx2f';
    link:any;

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER);
  }
  public sendGetSearchRequest(value) {
    this.link = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + value + 'd&api-key=2opniGDhCxWrHR84Em9unDdK39WTVx2f';
    return this.httpClient.get(this.link);
  }

}
