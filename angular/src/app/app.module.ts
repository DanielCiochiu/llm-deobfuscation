import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './orders/orders.component';
import { AppService } from './services/app.service';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'account', component: AccountComponent },
    { path: 'orders', component: OrdersComponent }
];

@NgModule({
    declarations: [AppComponent, LoginComponent, MenuComponent, AccountComponent, OrdersComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule {}
