import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import { AppComponent } from './app.component';
import { SidenavComponent} from './sidenav/sidenav.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { HomeComponent } from './home/home.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {PlayListComponent} from './play-list/play-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { PlayMusicComponent } from './play-music/play-music.component';
import {NgxAudioPlayerModule} from 'ngx-audio-player';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    PlayListComponent,
    PlayMusicComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatOptionModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatGridListModule,
    NgxAudioPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
