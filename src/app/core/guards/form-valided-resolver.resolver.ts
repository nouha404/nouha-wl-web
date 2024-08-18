import { ResolveFn, Router } from '@angular/router';
import { WordlistServiceImpl } from '../services/Impl/wordlist-impl.service';
import { of } from 'rxjs';
import { inject } from '@angular/core';

export const formValidedResolverResolver: ResolveFn<boolean> = (route, state) => {
    const wlService = inject(WordlistServiceImpl);
    const router = inject(Router);

    if (wlService.isFormSubmitted()) {
        return of(true); // Formulaire soumis, résolution réussie
    } else {
        router.navigate(['/home']);
        return of(false);
    }
}
