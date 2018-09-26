export const Helper = {

    isNull (el : any) : boolean {
        let result = false;
        if (el === null || typeof el === 'undefined') {
            result = true;
        }
        return result;
    },

    parseLocation (location : any) : any {
        let result = null;
        if (!this.isNull(location)) {
            result = {
                lon : location.coords.longitude,
                lat : location.coords.latitude
            }
        } else {
            result = {
                lon : null,
                lat : null
            }
        }
        return result;
    },

    concatenate (delimiter : string, parts : Array<any>) : string {
        let result = "";
        if (!this.isNull(parts)) {
            parts.forEach((part : any, index : number) => {
                result += part + delimiter;
            });
        }
        return result;
    },

    hasValue (prop : any) {
        let result = true;
        if (Helper.isNull(prop)) {
            result = false;
        }
        return result;
    },

    urlParams (obj : any) : string {
        let result = "";
        if (!this.isNull(obj)) {
            result = Object.keys(obj).map(function(key) { 
                return (obj[key] instanceof Object) ? key + '=' + JSON.stringify(obj[key]) : key + '=' + obj[key];
            }).join('&');
        }
        return result;
    },

    isEmpty (str : string) {
        let result = false;
        if (this.isNull(str) || str === "" || !str) {
            result = true;
        }
        return result;
    },

    encode (str : string) : string {
        let result = "";
        if (!this.isNull(str)) {
            result = encodeURIComponent(str);
        }
        return result;
    }, 

    toJSON (str : string) : any {
        let result = null;
        if (!this.isNull(str)) {
            result = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}'); 
        }
        return result;
    },

    joinObjects (first : any, second : any) : any {
        return {...first, ...second}
    },


    getTimeDifference (start : Date, end : Date) {
        console.log("date", start, end);
        let date_now = start.getTime();
        let date_future = end.getTime();
        var delta = Math.abs(date_future - date_now) / 1000;
        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        let mins = (minutes < 10) ? '0'+minutes : minutes; 
        let hrs = (hours < 10) ? '0'+hours : hours;

        return hrs+":"+mins;
    },
    
   
    withComma (first : any, second : any) {
        return first + ", " + second;
    },

    toFixed (number : number) : string {
        let result = "0";
        if (!this.isNull(number)) {
            result = number.toFixed(7);
        }
        return result;
    }
  

}