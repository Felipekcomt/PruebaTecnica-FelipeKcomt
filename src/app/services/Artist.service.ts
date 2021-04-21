import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  baseUrl = 'http://api.deezer.com/artist';

  constructor(private http: HttpClient) {
  }
    getArtistById(id): any{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
