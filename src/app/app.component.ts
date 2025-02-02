import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { WordlistComponent } from './pages/Wordlist/wordlist/wordlist.component';
import { HomeComponent } from './pages/Home/home/home.component';
import {IconsModule} from "./core/icones/icons.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,WordlistComponent,HomeComponent,IconsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wordlist-app';
}
