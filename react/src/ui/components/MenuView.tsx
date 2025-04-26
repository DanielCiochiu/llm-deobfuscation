import React from 'react';
import { MenuViewProps } from 'js-obfuscation-vanilla';

/**
 * The class that handles rendering the menu
 */
export class MenuView extends React.Component<MenuViewProps> {
    render() {
        const { onLogout, onAccount, onOrders } = this.props;

        return (
            <div>
                <a className="link" href="#" data-name="logout" onClick={onLogout}>
                    Logout
                </a>
                <a className="link" href="#" data-name="account" onClick={onAccount}>
                    Account
                </a>
                <a className="link" href="#" data-name="orders" onClick={onOrders}>
                    Orders
                </a>
            </div>
        );
    }
}
