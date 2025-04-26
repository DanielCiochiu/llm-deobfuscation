import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginViewProps } from '../../../../vanilla';
import { AppService } from '../services/app.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    props: LoginViewProps;
    email: string = '';
    password: string = '';

    constructor(
        private appService: AppService,
        private router: Router
    ) {}

    async login() {
        const user = await this.appService.authenticate(this.email, this.password);
        if (user) {
            this.router.navigate(['/account']);
        } else {
            alert('Login failed');
        }
    }
}
