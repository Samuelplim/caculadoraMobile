
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import Index from './src/pages/index/index';

const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={style.cal}>

        <View>

          <Index style={style.touchablecustom} />

        </View>

      </SafeAreaView>
    </>

  );
}
const style = StyleSheet.create({
  cal: {
    backgroundColor: '#222',

  },
  touchablecustom: {
    marginBottom: 1,

  }
});
export default App;