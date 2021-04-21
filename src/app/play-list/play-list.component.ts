import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AlbumService} from '../services/Album.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Track} from 'ngx-audio-player';


@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {
  i = 0;
  album = [];
  getAlbum: any = {};
  initial = 302127;
  temp: any;
  temp2: Track[] = [];
  @Input() search: any;
  @Output() changed = new EventEmitter<any>();
  audioObj = new Audio();
  title: string;
  artist: string;
  nameAlbum: string;
  reproduciendo: boolean = false;
  sound: boolean = true;


  constructor(private albumService: AlbumService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  FindId(id: any): void {
    this.reproduciendo = true;
    this.initial = id;
    this.temp2 = [];
    this.changed.emit(this.initial);
    this.albumService.getAlbumByIdTrack(this.initial).subscribe(album => {

      this.album = album.data;
      this.temp = this.album[1];
      this.album.forEach((album2) => {
        this.temp2.push({title: album2.title, link: album2.preview});
        this.artist = album2.artist.name;
      });
      this.audioObj.src = this.temp2[this.i].link;
      this.title = this.temp2[this.i].title;
      this.audioObj.load();
      this.audioObj.play();
    });
    this.albumService.getAlbumById(this.initial).subscribe(getAlbum => {
      this.getAlbum = getAlbum;
      console.log(this.getAlbum);
    });
  }

  play() {
    this.audioObj.play();
    if (this.reproduciendo) {
      this.reproduciendo = false;
      this.audioObj.pause();
    } else {
      this.reproduciendo = true;
    }

  }

  next() {
    this.audioObj.src = this.temp2[this.i + 1].link;
    this.audioObj.load();
    this.audioObj.play();
  }

  back() {
    if (this.i <= 0) {
      this.audioObj.src = this.temp2[this.i].link;
      this.audioObj.load();
      this.audioObj.play();
    } else {
      this.audioObj.src = this.temp2[this.i - 1].link;
    }
    this.audioObj.load();
    this.audioObj.play();
  }

  setVolume(ev) {
    this.audioObj.volume = ev.target.value;
  }
  pause() {
    if (this.sound){
      this.sound = false;
      this.audioObj.volume = 0;
    }else {
      this.sound = true;
      this.audioObj.volume = 0.5;
    }
  }
}
