import {Helper} from '../../util/helper';

export class Location {
    
    private longitude   : number = 0;
    private latitude    : number = 0;
    private accuracy    : number = 0;
    private altitude    : number = 0;
    private timestamp   : number = 0;
    private speed       : number = 0;
    private heading     : number = 0;
    private mocked      : boolean = false;
    private error       : any =  null;

    constructor (location : any) {
        if (location) {
            this.longitude = location.coords.longitude;
            this.latitude = location.coords.latitude;
            this.accuracy = location.coords.accuracy;
            this.altitude = location.coords.altitude;
            this.timestamp = location.timestamp;
            this.speed = location.coords.speed;
            this.heading = location.coords.heading;
            this.mocked = location.mocked;
        }
    }

    public get (key : string) {
        let result = null;
        switch (key) {
            case "longitude":
                result = this.longitude;
                break;
            case "latitude":
                result = this.latitude;
                break;
            case "altitude":
                result = this.altitude;
                break;
            case "accuracy":
                result = this.accuracy;
                break;
            case "speed":
                result = this.speed;
                break;
            case "header":
                result = this.heading;
                break;
            case "timestamp":
                result = this.timestamp;
                break;
            case "mocked":
                result = this.mocked;
                break;
            case "error":
                result = this.mocked;
                break;
            default:
                break;
        }
        return result;
    }

    public set (key : string, value : any) {
        let result = null;
        switch (key) {
            case "longitude":
                this.longitude = value;
                break;
            case "latitude":
                this.latitude = value;
                break;
            case "altitude":
                this.altitude = value;
                break;
            case "accuracy":
                this.accuracy = value;
                break;
            case "speed":
                this.speed = value;
                break;
            case "header":
                this.heading = value;
                break;
            case "timestamp":
                this.timestamp = value;
                break;
            case "mocked":
                this.mocked = value;
                break;
            case "error":
                this.error = value;
                break;
            default:
                break;
        }
        return result;
    }

    public setList (location : any) {
        if (location) {
            this.longitude = location.coords.longitude;
            this.latitude = location.coords.latitude;
            this.accuracy = location.coords.accuracy;
            this.altitude = location.coords.altitude;
            this.timestamp = location.timestamp;
            this.speed = location.coords.speed;
            this.heading = location.coords.heading;
            this.mocked = location.mocked;
        }
    }

    public toString () {
        let result = null;
        if (!Helper.isNull(this.longitude) && !Helper.isNull(this.latitude)) {
            result = Helper.concatenate(" ", [this.longitude, this.latitude]);
        } else {
            result = "";
        }
        return result;
    }



}