import { CustomElement } from '../CustomElement';

/**
 * Defines the login view props
 */
export type LoginViewProps = {
    // the login handler
    onLogin: (email: string, password: string) => void;
};

export class LoginView extends CustomElement<LoginViewProps> {
    static element = 'login-view';

    constructor(props: LoginViewProps) {
        super(props);

        this.querySelector('button')!.addEventListener('click', () => {
            const email = (<HTMLInputElement>this.querySelector('input[name="email"]')).value;
            const password = (<HTMLInputElement>this.querySelector('input[name="password"]')).value;
            this.props.onLogin(email, password);
        });
    }

    template() {
        return `<div>
            <h1>Login</h1>
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button>Login</button>
        </div>`;
    }
}
