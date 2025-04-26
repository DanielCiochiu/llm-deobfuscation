<script lang="ts">
    export let onLogin: (email: string, password: string) => void;

    let email = "";
    let password = "";

    const handleLogin = () => {
        onLogin(email.trim(), password.trim());
    };
</script>

<div>
    <h1>Login</h1>
    <input type="text" bind:value={email} placeholder="Email" />
    <input type="password" bind:value={password} placeholder="Password" />
    <button on:click={handleLogin}>Login</button>
</div>
