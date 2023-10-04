import 'react-native-gesture-handler';
import React from 'react';
import Routes from "./src/components/Navigation/index"
import * as Font from 'expo-font';

let customFonts = {
  'AveriaLibre': require('./assets/fonts/AveriaLibre-Regular.ttf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <Routes />
    );
  }
}
