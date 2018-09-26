import { createStore } from 'redux';
import Reducers from '../reducers/app.reducers';

export const AppStore = createStore(Reducers);