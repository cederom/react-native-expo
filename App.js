/**
 * Application Entry Point.
 *
 * IQLADY (C) 2019-2021 IQCREDO SP. Z O.O. ALL RIGHTS RESERVED!
 */

import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Constants from 'expo-constants';
import { StoreSetup } from 'src/store';
import MainNavigationContainer from 'src/navigation';
import { log } from 'src/lib';

let { store, persistor } = StoreSetup();

export default function App() {

  log.debug('[APP] Stared (' +
    'name=' + Constants.manifest.name + ' ' +
    'version="' + Constants.manifest.version + '" ' +
    'build="' + Constants.nativeBuildVersion + ' ' +
    'isDevice="' + Constants.isDevice + '" ' +
    'platform="' + JSON.stringify(Constants.platform) + '" ' +
    'ownership="' + Constants.appOwnership + '" ' +
    'deviceName="' + Constants.deviceName + '" ' +
    'deviceYearClass="' + Constants.deviceYearClass + '" ' +
    'extras=' + JSON.stringify(Constants.manifest.extras) +
    ').');

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Hello world :-)
      </Text>
    </View>
  );
}
