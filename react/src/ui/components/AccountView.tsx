import React from 'react';
import { AccountViewProps, getFormattedDate, getUserFullName } from 'js-obfuscation-vanilla';

/**
 * The component that implements the account view
 */
export class AccountView extends React.Component<AccountViewProps> {
    constructor(props: AccountViewProps) {
        super(props);
    }

    /**
     * Renders the account view template.
     */
    render() {
        const { user } = this.props;
        return (
            <div>
                <h1>Account Information</h1>
                <p>
                    <strong>Name:</strong> {getUserFullName(user)}
                </p>
                <p>
                    <strong>Email:</strong> {user.getEmail()}
                </p>
                <p>
                    <strong>Account created:</strong> {getFormattedDate(user.getCreatedDate())}
                </p>
                <p>
                    <strong>Last accessed:</strong> {getFormattedDate(user.getLastAccessedDate())}
                </p>
            </div>
        );
    }
}
