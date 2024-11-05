import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-create-user',
    standalone: true,
    imports: [
        ReactiveFormsModule

    ],
    templateUrl: './create-user.component.html',
    styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit {
// 'http://localhost:4200/reg/?name=Jon&email=jon@exp.com';
    public form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])

    });

    constructor(private router: ActivatedRoute, private route: Router) {
    }

    ngOnInit(): void {
        this.router.queryParams.subscribe(params => {
            this.form.controls.email.setValue(params?.['email'])
            this.form.controls.name.setValue(params?.['name'])

            // this.route.navigate([], { queryParams: {}, replaceUrl: true } );
        });
    }

}
