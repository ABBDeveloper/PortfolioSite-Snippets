import { inject } from "@angular/core";
import { AuthService } from "./servces/auth.service";
import { CanActivateFn, Router } from "@angular/router";

export const CanActivate: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (authService.isAuthenticated()) {
        return true;
    } else {
        router.navigate(['/login']);
        return false;
    }
}