import React, {useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import LoginScreen from './src/component/LoginScreen';
import AppNavigation from './src/navigation/index';


const App = () => {

  const [ isSignedIn, setIsSignedIn ] = useState(false)

  const onChange = value => {
    setIsSignedIn(value)
  };
  return (
    <SafeAreaView style = {{ flex: 1 }}>
      { isSignedIn !== false ? (
        <AppNavigation />
      )
      :
        <LoginScreen onChange={onChange} />
      }
      
    </SafeAreaView>
  );
}


export default App;