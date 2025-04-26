import { User } from '../models/User';

/**
 * Returns a concatenation of the first and last name from the user entity
 */
export function getUserFullName(user: User): string {
    return user.getFirstName() + ' ' + user.getLastName();
}

/**
 * Returns the formatted date according to the browser's localization
 */
export function getFormattedDate(date: Date): string {
    return date.toLocaleDateString();
}

/**
 * Returns the formatted price according to the browser's localization
 */
export function formatPrice(price: number, currency: string): string {
    return price.toLocaleString(undefined, {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: 2,
    });
}
