import {Component, OnInit} from '@angular/core';
import {RouterModule, RouterLink, RouterLinkActive, Router} from '@angular/router';
import {WordlistServiceImpl} from "../../../core/services/Impl/wordlist-impl.service";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-wordlist',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive, MatIcon, MatTooltip],
  templateUrl: './wordlist.component.html',
  styleUrl: './wordlist.component.css'
})
export class WordlistComponent implements OnInit{
  constructor(private wlService:WordlistServiceImpl, private router:Router){}
  wordList: string[] = [];
  ngOnInit(): void {
    this.wlService.getWorldList().subscribe(
      (data: string[]) => {
        this.wordList = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération de la wordlist:', error);
      }
    );
  }

  getFileTxt(): void{
   this.wlService.downloadTxtFile(this.wordList)

    setTimeout(()=>{
        this.router.navigateByUrl('/wordlist/form');
    },2000)
  }

}
