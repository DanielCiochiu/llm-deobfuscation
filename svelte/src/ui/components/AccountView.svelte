<script lang="ts">
    import { getUserFullName, getFormattedDate, User } from '../../../../vanilla';
    export let user: User;
</script>

<div>
    <h1>Account Information</h1>
    <p><strong>Name:</strong> {getUserFullName(user)}</p>
    <p><strong>Email:</strong> {user.getEmail()}</p>
    <p><strong>Account created:</strong> {getFormattedDate(user.getCreatedDate())}</p>
    <p><strong>Last accessed:</strong> {getFormattedDate(user.getLastAccessedDate())}</p>
</div>
