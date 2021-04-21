import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = 'https://api.deezer.com/search/album?q=';

  constructor(private http: HttpClient) {
  }
  getSearchAlbumbyTitle(title): any{
    return this.http.get(`${this.baseUrl}/${title}`);
  }
}
