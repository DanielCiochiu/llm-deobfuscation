import { UIInterface } from '../ui/UIInterface';
import { UIProps } from '../ui/UIProps';
import { DataAPI } from '../data/DataAPI';

/**
 * The class that handles controlling the application
 */
export class AppController {
    // the UIInterface to which this controller will be connected
    protected ui: UIInterface | null = null;
    // the API through which this controller requests data from the backend
    private api: DataAPI = new DataAPI();

    /**
     * Receives the UI interface for manipulating the views
     */
    connectUI(ui: UIInterface) {
        this.ui = ui;
    }

    /**
     * Returns the properties for the UI component
     */
    getUIProps(): UIProps {
        const { api, onLogin, onLogout } = this;
        return { api, onLogin, onLogout };
    }

    private getUI(): UIInterface {
        // throws error if trying to access the UI when not connected
        if (this.ui === null) throw new Error('UI is not connected');

        return this.ui;
    }

    /**
     * Handler invoked after the user interacts with a login button
     */
    private onLogin = async (email: string, password: string) => {
        const user = await this.api.authenticate(email, password);

        // showing the account view if the user is authenticated successfully
        if (user) this.getUI().showAccount();
        else this.getUI().showLogin();
    };

    /**
     * Handler invoked when the user hits the logout button
     */
    private onLogout: VoidFunction = async () => {
        await this.api.logout();
        this.getUI().showLogin();
    };
}
