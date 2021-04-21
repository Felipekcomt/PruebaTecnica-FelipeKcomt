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
  constructor(private artistService: ArtistService, private albumService: AlbumService , private router: Router, private activatedRoute: ActivatedRoute, private searchService: SearchService) {
  }
  ngOnInit(): void {
    this.artistService.getArtistById(27).subscribe(artist =>
     {this.artist = artist;});
    this.form = new FormGroup({find: new FormControl()});
    this.albumService.getAlbumById(192713382).subscribe(album =>
      {this.album = album; });
  }
  buscar(): void {
    this.searchService.getSearchAlbumbyTitle(this.form.get('find').value).subscribe( search =>
    {this.search = search;});
  }
  sendId(id: any): void{
  this.id = id;
  }

}
