import { AppStore } from '../store/app.store';

export class AbstractEventEmitter {

    dispatchEvent (action : any) {
        AppStore.dispatch(action);
    }

}