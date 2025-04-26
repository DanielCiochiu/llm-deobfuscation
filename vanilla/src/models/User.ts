import { UserData } from '../data/UserData';

/**
 * This class implements the user model
 */
export class User<CustomUserData extends UserData = UserData> {
    constructor(private data: CustomUserData) {}

    /**
     * Returns the identifier of the user
     */
    getId(): string {
        return this.data.id;
    }

    /**
     * Returns the first name of the user
     */
    getFirstName(): string {
        return this.data.first_name;
    }

    /**
     * Returns the last name of the user
     */
    getLastName(): string {
        return this.data.last_name;
    }

    /**
     * Returns the email address for this user
     */
    getEmail(): string {
        return this.data.email;
    }
}
