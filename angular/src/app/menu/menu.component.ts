import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { MenuViewProps } from '../../../../vanilla';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    props: MenuViewProps;

    constructor(
        private appService: AppService,
        private router: Router
    ) {}

    logout() {
        this.appService.logout();
        this.router.navigate(['/']);
    }
}
