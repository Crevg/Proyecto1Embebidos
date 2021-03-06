//export const BASE = "http://localhost:5000";
//export const BASE = "http://192.168.100.40:5000";
export const BASE = "http://1ca466e72b37.ngrok.io/";

export const LIGHTS_API = BASE + "/lights";
export const LIGHT_SIGNALS_STATUS = LIGHTS_API + "/signalsStatus";
export const LIGHT_UPDATE_SIGNAL = LIGHTS_API + "/updateSignal";
export const LIGHT_TURN_ALL_OFF = LIGHTS_API + "/turnAllOff";
export const LIGHT_TURN_ALL_ON = LIGHTS_API + "/turnAllOn";


export const DOORS_API = BASE + "/doors";
export const DOOR_SIGNALS_STATUS = DOORS_API + "/signalsStatus";


export const CAMERA_API = BASE + "/cam";
export const CAMERA_TAKE_PICTURE = CAMERA_API + "/photo";

export const AUTH_API = BASE + "/auth";
export const AUTH_LOG_IN = AUTH_API + "/login";
export const AUTH_LOG_OUT = AUTH_API + "/logout";
