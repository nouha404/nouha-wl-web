import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive, MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
