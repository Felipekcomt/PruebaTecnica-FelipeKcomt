import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ArtistService} from '../services/Artist.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlbumService} from '../services/Album.service';
import {SearchService} from '../services/Search.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artist: any;
  album: any;
  search: any;
  form: FormGroup;
  id: any;
  idTemp: any;
  nbfans: any;

  constructor(private artistService: ArtistService, private albumService: AlbumService, private router: Router, private activatedRoute: ActivatedRoute, private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.artistService.getArtistById(27).subscribe(artist => {
      this.artist = artist;
    });
    this.form = new FormGroup({find: new FormControl()});
    this.searchService.getSearchAlbumbyTitle('eminem').subscribe(album => {
      this.album = album.data;
      console.log(this.album, 'album1');
    });
    this.searchService.getSearchAlbumbyTitle('eminem').subscribe(search1 => {
      this.search = search1;
      console.log(this.search, 'eminem');
    });
    this.artistService.getArtistById(49918932).subscribe(nbfans => {
      this.nbfans = nbfans;
      console.log(this.nbfans.nb_fan, 'nbfans');
    });
  }

  buscar(): void {
    this.searchService.getSearchAlbumbyTitle(this.form.get('find').value).subscribe(search => {
      this.search = search;
      this.searchService.getSearchAlbumbyTitle(this.form.get('find').value).subscribe(album => {
        this.album = album.data;
        this.idTemp = this.album[0].artist.id;
      });
      this.artistService.getArtistById(this.idTemp).subscribe(nbfans => {
        this.nbfans = nbfans;
        console.log(this.nbfans, 'nbfans');
      });
    });
  }

  sendId(id: any): void {
    this.id = id;
  }

}
