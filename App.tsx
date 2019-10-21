import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ApplicationNavigator from './navigation/ApplicationNavigator';



/**
 * Start loading the Native Resources, Asnychronously
 */
async function startLoadingResources() {
  await Promise.all([
    Asset.loadAsync([
       require('./assets/icon.png'),
       require('./assets/splash.png'),
    ]),
    Font.loadAsync({
    ...Ionicons.font,
    })
  ]);
}

/**
 * Handle the Completion of the Native Resources
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setLoadingComplete - The "Set State" function
 */
function finishLoadingResources(setLoadingComplete: React.Dispatch<React.SetStateAction<boolean>>) {
   setLoadingComplete(true);
}

/**
 * Event - On Application Loading Error
 * @param {*} error - Error 
 */
function onApplicationLoadingError(error: any) {
    console.warn("Application Loading Error", error);
}




export const App: React.FC = () => {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    if (!isLoadingComplete) {
      return (
        <AppLoading startAsync={startLoadingResources} onError={onApplicationLoadingError} onFinish={() => finishLoadingResources(setLoadingComplete)} /> 
      );
    }
    else {
      return (
        <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <ApplicationNavigator />
       </View>
      );
    }
}

export default App;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
