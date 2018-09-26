
import { Helper } from '../../util/helper';

/* Events */
import { onLocation, onLocationError, onWatchLocation } from '../event/location.actions';
import { AbstractEventEmitter } from '../../common/event/service/abstract.event.emitter';

/* Model */
import { Location } from '../model/location.model';

export interface LocationConfiguration {
    enableHighAccuracy : boolean,
    timeout : number | null
    maximumAge : number | null
}

export class LocationService extends AbstractEventEmitter {

    private locationModel : Location;

    constructor (config : LocationConfiguration | null) {
        super();
        this.locationModel = new Location(null);
    }

    public async getLocation () {
        let result = null;
        if (!Helper.isNull(navigator)) {
            result = new Promise<any>(resolve => {
                navigator.geolocation.getCurrentPosition (
                    (position) => {
                        console.log("location");
                        this.locationModel.setList(position);
                        resolve(super.dispatchEvent(onLocation(this.locationModel)));
                    },
                    (error) => { 
                        resolve(super.dispatchEvent(onLocationError(error)));
                    },
                    {enableHighAccuracy: true, timeout : 10000, maximumAge : 0}  
                )
            });
        } else {
            throw new DOMException("No Source given to GeoLocation");
        }
        return result;
    }

    public watchLocation () : void { 
        if (!Helper.isNull(navigator)) {
            navigator.geolocation.watchPosition (
                (position) => {
                    this.locationModel.setList(position);
                    super.dispatchEvent(onWatchLocation(this.locationModel));
                },
                (error) => {
                    super.dispatchEvent(onLocationError(error));
                },
                {enableHighAccuracy: false, timeout: 20000, maximumAge: 0}
            )
        } else {
            throw new DOMException("No Source given to GeoLocation");
        }
    }
}
