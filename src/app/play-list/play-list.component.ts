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
  album = [];
  id: any;
  temp: any;
  temp2: Track[] = [];
  @Input() search: any;
  @Output() changed = new EventEmitter<any>();
  audioObj = new Audio();
  constructor(private albumService: AlbumService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  FindId(id: any): void{
    this.temp2 = [];
    this.changed.emit(id);
    this.albumService.getAlbumByIdTrack(id).subscribe(album => {

      this.album = album.data;
      console.log(this.album[1]);
      this.temp = this.album[1];
      this.album.forEach((album2) => {
        this.temp2.push({title: album2.title, link: album2.preview});
      });
      this.audioObj.src = this.temp2[0].link;
      this.audioObj.load();
      this.audioObj.play();
      console.log(this.album);
      console.log(this.temp2);
    });
  }
  play(){
  this.audioObj.play();
  }
  pause(){
  this.audioObj.pause();
  }
  stop(){
  this.audioObj.pause();
  this.audioObj.currentTime = 0;
  }
  setVolume(ev) {
  this.audioObj.volume = ev.target.value;
  }
}
