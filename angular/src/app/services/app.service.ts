import { Injectable } from '@angular/core';
import { BobDoe, JohnDoe, Order, OrderPhone, User } from '../../../../vanilla';

@Injectable({ providedIn: 'root' })
export class AppService {
    private currentUser: User = null;

    /**
     * Does the authentication process and returns a stubbed user
     */
    async authenticate(email: string, password: string) {
        if (email === 'bob') {
            this.currentUser = new User(BobDoe);
        } else if (email === 'john') {
            this.currentUser = new User(JohnDoe);
        } else {
            this.currentUser = null;
        }
        return this.currentUser;
    }

    /**
     * Returns the current user if exists
     */
    getCurrentUser() {
        return this.currentUser;
    }

    /**
     * Does the actual logout by forgetting the current user
     */
    async logout() {
        this.currentUser = null;
    }

    /**
     * Returns the user's list of orders
     */
    async getOrders(): Promise<Array<Order>> {
        if (!this.currentUser) {
            throw new Error('User not authenticated');
        }
        return [new Order(OrderPhone)];
    }
}
