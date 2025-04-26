import { CustomElement } from '../CustomElement';
import { User } from '../../models/User';
import { getFormattedDate, getUserFullName } from '../../helpers/formatters';

/**
 * Declares the account view props
 */
export type AccountViewProps = {
    user: User;
};

/**
 * The class that implements the account view
 */
export class AccountView extends CustomElement<AccountViewProps> {
    static element = 'account-view';

    /**
     * Renders the account view template.
     */
    template() {
        const { user } = this.props as AccountViewProps;
        return `
            <div>
                <h1>Account Information</h1>
                <p><strong>Name:</strong> ${getUserFullName(user)}</p>
                <p><strong>Email:</strong> ${user.getEmail()}</p>
                <p><strong>Account created:</strong> ${getFormattedDate(user.getCreatedDate())}</p>
                <p><strong>Last accessed:</strong> ${getFormattedDate(user.getLastAccessedDate())}</p>
            </div>
        `;
    }
}
