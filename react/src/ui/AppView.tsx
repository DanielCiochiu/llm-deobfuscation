import React, { JSX } from 'react';
import { UIInterface, UIProps } from 'js-obfuscation-vanilla';
import { LoginView } from './components/LoginView';
import { MenuView } from './components/MenuView';
import { AccountView } from './components/AccountView';
import { OrdersView } from './components/OrdersView';

/**
 * The class that handles rendering the UI using Vanilla JavaScript
 */
export class AppView extends React.Component<UIProps, { activeView: null | JSX.Element }> implements UIInterface {
    static element = 'app-view';

    // the menu view component
    private menuView: JSX.Element;

    constructor(props: UIProps) {
        super(props);

        // creating the initial state
        this.state = {
            activeView: null
        };

        // creating the menu view instance
        this.menuView = this.createMenu();
    }

    /**
     * Shows the account view for the current user if exists
     * If not, it will show the login form
     */
    async showAccount(): Promise<void> {
        const user = this.props.api.getCurrentUser();
        if (user === null) return await this.showLogin();

        this.setState({
            activeView: <AccountView user={user} />
        });
    }

    /**
     * Shows the login view
     */
    async showLogin(): Promise<void> {
        this.setState({
            activeView: <LoginView onLogin={this.props.onLogin} />
        });
    }

    /**
     * Shows the list of orders the current user has placed
     */
    async showOrders(): Promise<void> {
        const user = this.props.api.getCurrentUser();
        if (user === null) return await this.showLogin();

        // getting the list of orders for the current users
        const orders = await this.props.api.getOrders();

        this.setState({
            activeView: <OrdersView orders={orders} />
        });
    }

    /**
     * Creates the menu view instance
     */
    private createMenu(): JSX.Element {
        return <MenuView onLogout={() => this.showLogin()} onAccount={() => this.showAccount()} onOrders={() => this.showOrders()} />;
    }

    render() {
        return (
            <div>
                {this.menuView}
                {this.state?.activeView || null}
            </div>
        );
    }
}
