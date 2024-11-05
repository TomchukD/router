import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/login/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    public isVisible = false;
    constructor(private service: AuthService,private router: Router, private activatedRoute: ActivatedRoute)  {
    this.activatedRoute.queryParams.subscribe((params)=>{
        console.log(params);
        if(params['show']){
            this.isVisible= true;
        }
    })
    }

    public login(): void {
      this.service.login('user1' ,'pass1').subscribe((v)=>{
        if(v){
          this.router.navigate(['/app/dashboard'])
        }
      })
    }
}
