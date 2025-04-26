import { CustomElement } from '../CustomElement';

/**
 * Declares the menu view props
 */
export type MenuViewProps = {
    onLogout: VoidFunction;
    onAccount: VoidFunction;
    onOrders: VoidFunction;
};

/**
 * The class that handles rendering the menu
 */
export class MenuView extends CustomElement {
    static element = 'menu-view';

    constructor(props: MenuViewProps) {
        super(props);

        this.querySelector('[data-name="logout"]')!.addEventListener('click', props.onLogout);
        this.querySelector('[data-name="account"]')!.addEventListener('click', props.onAccount);
        this.querySelector('[data-name="orders"]')!.addEventListener('click', props.onOrders);
    }

    template() {
        return `
            <a class="link" href="#" data-name="logout" onclick="return false;">Logout</a>
            <a class="link" href="#" data-name="account" onclick="return false;">Account</a>
            <a class="link" href="#" data-name="orders" onclick="return false;">Orders</a>
        `;
    }
}
