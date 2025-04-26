import React from 'react';
import { LoginViewProps } from 'js-obfuscation-vanilla';

export class LoginView extends React.Component<LoginViewProps> {
    private emailInput?: HTMLInputElement | null = null;
    private passwordInput?: HTMLInputElement | null = null;

    /**
     * Handles requesting authenticating based the inputted credentials
     */
    handleLogin = () => {
        const email = (this.emailInput?.value || '').trim();
        const password = (this.passwordInput?.value || '').trim();
        this.props.onLogin(email, password);
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    ref={input => {
                        this.emailInput = input as HTMLInputElement | null;
                    }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={input => {
                        this.passwordInput = input as HTMLInputElement | null;
                    }}
                />
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
}
