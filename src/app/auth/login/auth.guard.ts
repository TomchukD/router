import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/login/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

    const authService = inject(AuthService);
    const router = inject(Router)
        debugger
    if(authService.isLoginIn()){
        return true;
    }
    router.navigate(['/login']);
    return false;
};
