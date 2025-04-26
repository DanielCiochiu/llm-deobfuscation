import { AppController } from './controllers/AppController';
import { AppView } from './ui/AppView';

/**
 * The entry point in the Vanilla implementation
 */
const controller = new AppController();
const uiProps = controller.getUIProps();

// creating the vanilla app view instance
const appView = new AppView(uiProps);

// connecting the controller to the app view
controller.connectUI(appView);
