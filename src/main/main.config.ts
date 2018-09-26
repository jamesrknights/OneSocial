/** Main Configuration File */

import { AppState } from '@common/event/reducers/app.reducers';

/** Main State Interface */

export interface MainState {
    init : boolean,
    isLoading : boolean
}

/** List of Action Constants */

const MAIN_CHANGE_INIT = "MAIN_CHANGE_INIT";
const MAIN_IS_LOADING = "MAIN_IS_LOADING";

/** List of Actions */

export function MainActions (dispatch : any)  {
    return {
        isLoading   :   () => dispatch({ type: MAIN_IS_LOADING }),
        changeInit  :   () => dispatch({ type: MAIN_CHANGE_INIT })
    }
}

/** State and Props Mapping */
export function MainStateToProps (state : any) {
    return {
        init : state.main.init,
        isLoading : state.main.isLoading,
        location : state.location
    }
}



