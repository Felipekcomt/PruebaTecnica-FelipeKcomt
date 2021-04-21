import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }
  myLibrary: any[] = [
    {id: 1, name: 'Recientes'},
    {id: 2, name: 'Artistas'},
    {id: 3, name: 'Álbums'},
    {id: 4, name: 'Canciones'},
    {id: 5, name: 'Estaciones'},
    ];
  playList: any[] = [
    {id: 1, name: 'Metal'},
    {id: 2, name: 'Para Bailar'},
    {id: 3, name: 'Rock 90s'},
    {id: 4, name: 'Baladas'}
  ]
  ngOnInit(): void {
  }

}
