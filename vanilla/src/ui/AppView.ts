import { UIInterface } from './UIInterface';
import { CustomElement } from './CustomElement';
import { UIProps } from './UIProps';
import { LoginView } from './components/LoginView';
import { MenuView } from './components/MenuView';
import { AccountView } from './components/AccountView';
import { OrdersView } from './components/OrdersView';

/**
 * The class that handles rendering the UI using Vanilla JavaScript
 */
export class AppView extends CustomElement<UIProps> implements UIInterface {
    static element = 'app-view';

    // the container in which the AppView will be rendered
    private container = document.body;

    // the menu view component
    private menuView: MenuView;

    constructor(props: UIProps) {
        super(props);

        // creating the menu view and appending it to this element
        this.menuView = this.createMenu();
        this.appendChild(this.menuView);

        // appending this instance to the body element
        this.container.appendChild(this);
    }

    /**
     * Returning the null template because it relies on child elements for rendering the UI
     */
    template(): string | null {
        return null;
    }

    /**
     * Shows the account view for the current user if exists
     * If not, it will show the login form
     */
    async showAccount(): Promise<void> {
        const user = this.props.api.getCurrentUser();
        if (user === null) return await this.showLogin();

        this.removeAllChildren();
        this.appendChild(new AccountView({ user }));
    }

    /**
     * Shows the login view
     */
    async showLogin(): Promise<void> {
        this.removeAllChildren();
        this.appendChild(new LoginView({ onLogin: this.props.onLogin }));
    }

    /**
     * Shows the list of orders the current user has placed
     */
    async showOrders(): Promise<void> {
        const user = this.props.api.getCurrentUser();
        if (user === null) return await this.showLogin();

        // getting the list of orders for the current users
        const orders = await this.props.api.getOrders();

        this.removeAllChildren();
        this.appendChild(new OrdersView({ orders }));
    }

    /**
     * Overriding the default implementation for clearing out all children except the menu
     */
    removeAllChildren() {
        super.removeAllChildren([this.menuView]);
    }

    /**
     * Creates the menu view instance
     */
    private createMenu(): MenuView {
        return new MenuView({
            onLogout: () => this.showLogin(),
            onAccount: () => this.showAccount(),
            onOrders: () => this.showOrders()
        });
    }
}
