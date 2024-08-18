import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { WordlistServiceImpl } from '../../../../core/services/Impl/wordlist-impl.service';
import {WorldlistModel } from '../../../../core/models/worldlist.model';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-wordlist.form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, MatIcon],
  templateUrl: './wordlist.form.component.html',
  styleUrl: './wordlist.form.component.css'
})
export class WordlistFormComponent {
  constructor(private wlService:WordlistServiceImpl, private router:Router){}

  DefaultselectedNumber: number=2;
  infoValues: WorldlistModel[] = [];
  errors: any;

  isFormValid(): boolean {
    for (let i = 1; i <= this.DefaultselectedNumber; i++) {
      if (!this.infoValues[i]) {
        return false;
      }
    }
    return true;
  }

  onSaveFormulaire(formWordlist: NgForm) {
    if (formWordlist.valid) {
      // Créer un tableau de WorldlistModel à partir des valeurs saisies
        this.infoValues = this.numberSequence(this.DefaultselectedNumber).map(index => ({
          info: formWordlist.value['info' + index]!
        }));

      this.wlService.createInformation(this.infoValues)
        .subscribe(() => {
          this.wlService.setFormSubmitted(true);
          this.router.navigateByUrl('/wordlist/file');

        }, error => {
          console.error("Error submitting form:", error);
        });
      } else {
        this.errors = "Veuillez remplir tous les champs obligatoires.";
      }

  }

  numberSequence(num: number): number[] {
    return Array.from({ length: num }, (_, i) => i + 1);
  }

}
