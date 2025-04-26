<script lang="ts">
    import { onMount } from 'svelte';
    import { AppController, Order, User } from '../../../vanilla';

    import LoginView from './components/LoginView.svelte';
    import MenuView from './components/MenuView.svelte';
    import AccountView from './components/AccountView.svelte';
    import OrdersView from './components/OrdersView.svelte';

    const accountUI = new AppController();
    let activeView: 'login' | 'account' | 'orders' = 'login';
    let user: User | null = null;
    let orders: Order[] = [];

    const uiProps = accountUI.getUIProps();

    accountUI.connectUI({
        showAccount,
        showLogin,
        showOrders
    });

    async function showAccount() {
        user = uiProps.api.getCurrentUser();
        if (user) {
            activeView = 'account';
        } else {
            await showLogin();
        }
    }

    async function showLogin() {
        activeView = 'login';
    }

    async function showOrders() {
        if (!uiProps.api.getCurrentUser()) {
            return await showLogin();
        }
        orders = await uiProps.api.getOrders();
        activeView = 'orders';
    }
</script>

<div>
    <MenuView
        onLogout={uiProps.onLogout}
        onAccount={showAccount}
        onOrders={showOrders}
    />

    {#if activeView === 'login'}
        <LoginView onLogin={uiProps.onLogin} />
    {:else if activeView === 'account' && user}
        <AccountView {user} />
    {:else if activeView === 'orders'}
        <OrdersView {orders} />
    {/if}
</div>
