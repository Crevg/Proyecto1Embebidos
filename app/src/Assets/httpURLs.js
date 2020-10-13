//export const BASE = "http://localhost:8000";
export const BASE = "http://192.168.100.40:8000";
export const LIGHTS_API = BASE + "/lights";
export const DOORS_API = BASE + "/doors";

export const LIGHT_SIGNALS_STATUS = LIGHTS_API + "/signalsStatus";
export const DOOR_SIGNALS_STATUS = DOORS_API + "/signalsStatus";
export const LIGHT_UPDATE_SIGNAL = LIGHTS_API + "/updateSignal";
export const DOOR_UPDATE_SIGNAL = DOORS_API + "/updateSignal";