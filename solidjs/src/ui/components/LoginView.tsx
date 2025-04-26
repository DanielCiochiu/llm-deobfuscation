import { createSignal } from 'solid-js';

export default function LoginView(props: { onLogin: (email: string, password: string) => void }) {
    const [email, setEmail] = createSignal('');
    const [password, setPassword] = createSignal('');

    const handleLogin = () => {
        props.onLogin(email().trim(), password().trim());
    };

    return (
        <div>
            <h1>Login</h1>
            <input type="text" name="email" placeholder="Email" value={email()} onInput={e => setEmail(e.currentTarget.value)} />
            <input type="password" name="password" placeholder="Password" value={password()} onInput={e => setPassword(e.currentTarget.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
