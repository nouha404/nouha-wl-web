import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-wordlist',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterLinkActive],
  templateUrl: './wordlist.component.html',
  styleUrl: './wordlist.component.css'
})
export class WordlistComponent {

}
