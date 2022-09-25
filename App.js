/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { screenOptions } from './src/utils/constants';
import Items from './src/components/Items';

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Memes">
              <Stack.Screen
                name="Memes"
                component={Items}
                options={({navigation}) => ({...screenOptions,
                  // headerRight: () => (
                  //   <Button
                  //     title="Saved"
                  //     onPress={() => navigation.navigate('SavedMemes')}
                  //   />
                  // ),
                })}
              />
              {/* <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={screenOptions}
              />
              <Stack.Screen
                name="SavedMemes"
                component={SavedMemes}
                options={screenOptions}
              /> */}
            </Stack.Navigator>
          </NavigationContainer>
        </View>
    </SafeAreaView>
  );
};

export default App;
