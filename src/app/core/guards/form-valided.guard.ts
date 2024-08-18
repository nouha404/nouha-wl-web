import { CanActivateFn, Router } from '@angular/router';
import {WordlistServiceImpl} from "../services/Impl/wordlist-impl.service";
import {inject} from "@angular/core";

export const formValidedGuard: CanActivateFn = (route, state) => {

  const wlService = inject(WordlistServiceImpl);
  const router = inject(Router);
  if (wlService.isFormSubmitted()) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
