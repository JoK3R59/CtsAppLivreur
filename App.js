import React, {useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/component/redux/store'

import LoginScreen from './src/component/LoginScreen';
import AppNavigation from './src/navigation/index';


const App = () => {

  const [ isSignedIn, setIsSignedIn ] = useState(false)

  const onChange = value => {
    setIsSignedIn(value)
  };
  return (
    <Provider store={store}>
      <SafeAreaView style = {{ flex: 1 }}>
      { isSignedIn !== false ? (<AppNavigation />)
      :
      <LoginScreen onChange={onChange} />
      }
      </SafeAreaView>
    </Provider>
    
  );
}


export default App;