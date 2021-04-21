import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  baseUrl = 'http://api.deezer.com/album';

  constructor(private http: HttpClient) {
  }
  getAlbumById(id): any{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getAlbumByIdTrack(id): any {
    return this.http.get(`${this.baseUrl}/${id}` + '/tracks');
  }
}
