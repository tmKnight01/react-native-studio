import React from 'react';
import UiState from './src/pages/UIState/UiState';
import FbProfile from './src/pages/FbProfile';
import TwitterProfile from './src/pages/TwProfile';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
     <TwitterProfile/>
    </SafeAreaProvider>
  );
}

export default App;
