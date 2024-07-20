import { Routes } from '@angular/router';
import { WordlistComponent } from './pages/Wordlist/wordlist/wordlist.component';
import { WordlistFormComponent } from './pages/Wordlist/wordlist/form/wordlist.form.component';
import { HomeComponent } from './pages/Home/home/home.component';

export const routes: Routes = [

  {
    path:"home",
    component:HomeComponent,
  },


  {
    path:"wordlist",

    children: [
      {
        path:"",
        component:WordlistComponent,
      },
      {
        path:"form",
        component:WordlistFormComponent
      },
    ]
  },

  {
    path: '',
    redirectTo:'/home',
    pathMatch : "full"
  },
];
