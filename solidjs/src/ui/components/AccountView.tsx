import { User, getFormattedDate, getUserFullName } from '../../../../vanilla';

export default function AccountView(props: { user: User }) {
    return (
        <div>
            <h1>Account Information</h1>
            <p>
                <strong>Name:</strong> {getUserFullName(props.user)}
            </p>
            <p>
                <strong>Email:</strong> {props.user.getEmail()}
            </p>
            <p>
                <strong>Account created:</strong> {getFormattedDate(props.user.getCreatedDate())}
            </p>
            <p>
                <strong>Last accessed:</strong> {getFormattedDate(props.user.getLastAccessedDate())}
            </p>
        </div>
    );
}
