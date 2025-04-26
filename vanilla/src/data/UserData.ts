/**
 * The user data type that defines the structure of the user response
 */
export type UserData = {
    // the identifier of the user
    id: string;
    // the first name of the user
    first_name: string;
    // the last (family) name of the user
    last_name: string;
    // the user's email address
    email: string;
    // the date when the account was created
    date_created: string;
    // the date when the account was last accessed
    date_last_accessed: string;
};
