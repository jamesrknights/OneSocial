/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

/* Common */
import { Props } from '@common/component/common.props';
//import { AppStore } from '@common/event/store/app.store';
import { AppStore } from './modules/common/event/store/app.store'; 

/* Redux */
import { Provider } from 'react-redux';

/** Components */
import  MainComponent from './src/main/main.component';

/** Register Services */


export default class App extends Component<Props> {

  componentDidMount () {}

  render() {
    return (
      <Provider store={AppStore}>
          <MainComponent />
      </Provider>
    );
  }
}

