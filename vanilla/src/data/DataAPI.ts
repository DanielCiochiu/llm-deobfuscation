import { User } from '../models/User';
import { UserData } from './UserData';
import { BobDoe } from './stubs/user.bob.doe';
import { JohnDoe } from './stubs/user.john.doe';
import { Order } from '../models/Order';
import { OrderPhone } from './stubs/order.phone';

/**
 * Stubbed data API that handles authentication, logout and getting the list of orders
 */
export class DataAPI {
    private currentUser: User | null = null;

    /**
     * Does the authentication and returns a User if everything went ok or null if credentials are invalid
     */
    async authenticate(user: string, password: string): Promise<User | null> {
        const response: UserData | null = user === 'bob.doe@noaddress.com' ? BobDoe : user === 'john.doe@noaddress.com' ? JohnDoe : null;
        this.currentUser = response ? new User(response) : null;
        return this.currentUser;
    }

    /**
     * Returns the current authenticated user
     */
    getCurrentUser(): User | null {
        return this.currentUser;
    }

    /**
     * Does the logout process
     */
    async logout() {
        this.currentUser = null;
    }

    /**
     * Returns the list of orders for this user
     */
    async getOrders(): Promise<Array<Order>> {
        if (this.currentUser === null) {
            throw new Error('The user is not authenticated for this operation');
        }

        return [new Order(OrderPhone)];
    }
}
