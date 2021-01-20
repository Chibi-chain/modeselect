
import React from 'react';
import { Text } from 'react-native';
import Home from './screens/Home';

import {AppearanceProvider} from 'react-native-appearance';

const App = () => {
    return(
        <>
        
        <AppearanceProvider>
          <Home />
        </AppearanceProvider>
        </>
    );
};
export default App;