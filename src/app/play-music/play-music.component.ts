import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {AlbumService} from '../services/Album.service';
import {ActivatedRoute, Router} from '@angular/router';
import {addParseSpanInfo} from '@angular/compiler-cli/src/ngtsc/typecheck/src/diagnostics';


@Component({
  selector: 'app-play-music',
  templateUrl: './play-music.component.html',
  styleUrls: ['./play-music.component.css']
})
export class PlayMusicComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }
}
