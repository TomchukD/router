import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    api = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string): Observable<any> {
        const body = { username, password };
        return this.http.post(`${this.api}/login`, body).pipe(
            tap((res: any) => {

                localStorage.setItem('access_token', res.token);
            }), catchError(err => {
                console.log(err);
                return of();
            })
        );
    }

    isLoginIn(): boolean {
        return !!localStorage.getItem('access_token');
    }


}
