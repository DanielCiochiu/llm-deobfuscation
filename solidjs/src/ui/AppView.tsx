import { createSignal } from 'solid-js';
import { AppController, Order, User } from '../../../vanilla';
import LoginView from './components/LoginView';
import MenuView from './components/MenuView';
import AccountView from './components/AccountView';
import OrdersView from './components/OrdersView';

const accountUI = new AppController();
const uiProps = accountUI.getUIProps();

export default function AppView() {
    const [activeView, setActiveView] = createSignal<'login' | 'account' | 'orders'>('login');
    const [user, setUser] = createSignal<User | null>(null);
    const [orders, setOrders] = createSignal<Order[]>([]);

    accountUI.connectUI({
        showAccount,
        showLogin,
        showOrders
    });

    async function showAccount() {
        const currentUser = uiProps.api.getCurrentUser();
        if (currentUser) {
            setUser(currentUser);
            setActiveView('account');
        } else {
            await showLogin();
        }
    }

    async function showLogin() {
        setActiveView('login');
    }

    async function showOrders() {
        if (!uiProps.api.getCurrentUser()) {
            return await showLogin();
        }
        const fetchedOrders = await uiProps.api.getOrders();
        setOrders(fetchedOrders);
        setActiveView('orders');
    }

    return (
        <div>
            <MenuView onLogout={uiProps.onLogout} onAccount={showAccount} onOrders={showOrders} />

            {activeView() === 'login' && <LoginView onLogin={uiProps.onLogin} />}
            {activeView() === 'account' && user() && <AccountView user={user()!} />}
            {activeView() === 'orders' && <OrdersView orders={orders()} />}
        </div>
    );
}
