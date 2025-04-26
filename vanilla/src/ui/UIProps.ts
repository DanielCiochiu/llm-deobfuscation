import { DataAPI } from '../data/DataAPI';

/**
 * The interface that describes what properties will be forwarded to the UI interface
 */
export interface UIProps {
    // handler invoked when the user presses a login button
    onLogin: (email: string, password: string) => void;
    // handler to be invoked when the user presses the logout button
    onLogout: VoidFunction;
    // the DataAPI for accessing backend information
    api: DataAPI;
}
