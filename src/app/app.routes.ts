import { Routes } from '@angular/router';
import { WordlistComponent } from './pages/Wordlist/wordlist/wordlist.component';
import { WordlistFormComponent } from './pages/Wordlist/wordlist/form/wordlist.form.component';
import { HomeComponent } from './pages/Home/home/home.component';
import {formValidedGuard} from "./core/guards/form-valided.guard";
import {formValidedResolverResolver} from "./core/guards/form-valided-resolver.resolver";

export const routes: Routes = [

  {
    path:"home",
    component:HomeComponent,
  },


  {
    path:"wordlist",
    children: [
      {
        path:"form",
        component:WordlistFormComponent
      },
      {
        path: "file",
        component : WordlistComponent,
        canActivate: [formValidedGuard],
        resolve: { formValided: formValidedResolverResolver }, //eviter de reafficher la page meme un court delai
      },
    ]
  },

  {
    path: '',
    redirectTo:'/home',
    pathMatch : "full"
  },
];
