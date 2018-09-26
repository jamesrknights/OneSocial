export function onLocation (model : any) {
    return ({ type: "ON_LOCATION", model : model })
}

export function onWatchLocation (model : any) {
    return ({ type: "ON_WATCH_LOCATION" , model : model })
}

export function onLocationError (model : any) {
    return ({ type: "ON_LOCATION_ERROR", model : model })
} 

