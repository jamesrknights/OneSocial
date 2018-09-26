
import { combineReducers } from "redux";

/** Reducers */
import mainReducer from '../../../../src/main/main.reducers';
import locationReducer from '../../../location/event/location.reducer';

/** App State */
export interface AppState<MainState, LocationState> {
    main : MainState
    location : LocationState
}

/** Combine Reducers */
export default combineReducers({
    main : mainReducer,
    location : locationReducer
}); 