import { deviceStatus } from '../models/devicestatus';

export function transformDeviceData(deviceArr) {
    //Find default device status SEE models/devicestatus.js
    let defaultStatus;
    deviceStatus.forEach((status) => {
        if (status.default === true) {
            defaultStatus = status.name;
        }
    });

    const alteredArr = deviceArr.map((device, index) => {
        //Add default device status since dummy data does not include that info.
        if (!('status' in device)) {
            device = {
                ...device,
                status: defaultStatus,
            }
        }
        //Add unique ID's for each device. This is necessary to differentiate between devices with the same name (e.g. "hallway dimmer"). 
        //We use the index of the device as a substitute
        device = {
            id: ++index,
            ...device,
        }

        //Initialize comment field as empty array for later population
        device = {
            ...device,
            comments: [],
        }

        return device;
    });

    return alteredArr;
}

//Create Object with groups for each device status and sort initial elements into it
export function prepareDeviceGroups(deviceArr) {
    let deviceGroups = {};
    deviceStatus.forEach((status) => {
        deviceGroups[status.name] = deviceArr.filter((device) => device.status === status.name);
    })
    return deviceGroups;
}

