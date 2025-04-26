import React from 'react';

import { AppController } from 'js-obfuscation-vanilla';
import { AppView } from './src/ui/AppView';
import { createRoot } from 'react-dom/client';

/**
 * The entry point in the React implementation
 */
const controller = new AppController();
const uiProps = controller.getUIProps();

const root = createRoot(document.body);
root.render(
    <AppView
        {...uiProps}
        ref={appView => {
            if (appView) controller.connectUI(appView);
        }}
    />
);
