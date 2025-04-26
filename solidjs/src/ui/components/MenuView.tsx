export default function MenuView(props: { onLogout: () => void; onAccount: () => void; onOrders: () => void }) {
    return (
        <div>
            <a
                href="#"
                onClick={e => {
                    e.preventDefault();
                    props.onLogout();
                }}
            >
                Logout
            </a>
            <a
                href="#"
                onClick={e => {
                    e.preventDefault();
                    props.onAccount();
                }}
            >
                Account
            </a>
            <a
                href="#"
                onClick={e => {
                    e.preventDefault();
                    props.onOrders();
                }}
            >
                Orders
            </a>
        </div>
    );
}
