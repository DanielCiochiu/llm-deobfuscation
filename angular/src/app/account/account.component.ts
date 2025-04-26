import { Component } from '@angular/core';
import { AppService } from '../services/app.service';
import { getUserFullName } from '../../../../vanilla';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html'
})
export class AccountComponent {
    user = this.appService.getCurrentUser();

    constructor(private appService: AppService) {}

    protected readonly getUserFullName = getUserFullName;
}
