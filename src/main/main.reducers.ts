import { Action } from 'redux';

const MainState = {
    init : false,
    isLoading : null
}

export default function (state = MainState, action : Action<any>) {
    let result = state;
    console.log("changing main type", action.type);
    switch (action.type) {
      case "MAIN_CHANGE_INIT":
        result = { ...result, init: !state.init } 
        break;
    }
    return result;
};