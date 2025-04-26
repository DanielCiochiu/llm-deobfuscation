<script lang="ts">
    export let onLogout: () => void;
    export let onAccount: () => void;
    export let onOrders: () => void;
</script>

<div>
    <a href="#" on:click|preventDefault={onLogout}>Logout</a>
    <a href="#" on:click|preventDefault={onAccount}>Account</a>
    <a href="#" on:click|preventDefault={onOrders}>Orders</a>
</div>
