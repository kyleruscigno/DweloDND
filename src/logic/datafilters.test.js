import { prepareDeviceGroups, transformDeviceData } from './datafilters';
import deviceStatus from '../models/devicestatus';

const dummyDataNoStatus = {
    "devices": [
        { "name": "light switch 1", "type": "SWITCH", "state": "off" },
        { "name": "light switch 2", "type": "SWITCH", "state": "off" },
        { "name": "light switch 3", "type": "SWITCH", "state": "off" },
        { "name": "light switch 4", "type": "SWITCH", "state": "off" },
        { "name": "door lock", "type": "LOCK", "codes": [ "1234", "2345", "3456", "4567" ], "locked": true },
        { "name": "hallway dimmer", "type": "DIMMER", "level": 0.85 },
        { "name": "hallway dimmer", "type": "DIMMER", "level": 0.85 },
        { "name": "thermostat", "type": "THERMO", "temp": 72.0, "mode": "AUTO" }
    ],
}

const dummyData = {
    "devices": [
        { "status": "Requested", "name": "light switch 1", "type": "SWITCH", "state": "off" },
        { "status": "Requested", "name": "light switch 2", "type": "SWITCH", "state": "off" },
        { "status": "Purchased", "name": "light switch 3", "type": "SWITCH", "state": "off" },
        { "status": "Purchased", "name": "light switch 4", "type": "SWITCH", "state": "off" },
        { "status": "Purchased", "name": "door lock", "type": "LOCK", "codes": [ "1234", "2345", "3456", "4567" ], "locked": true },
        { "status": "Shipped", "name": "hallway dimmer", "type": "DIMMER", "level": 0.85 },
        { "status": "Installed", "name": "hallway dimmer", "type": "DIMMER", "level": 0.85 },
        { "status": "Installed", "name": "thermostat", "type": "THERMO", "temp": 72.0, "mode": "AUTO" }
    ],
}

//Test each device's status is the default
test('default status added to devices', () => {
    let defaultStatus = deviceStatus.find((status) => status.default === true).name;
    transformDeviceData(dummyDataNoStatus.devices).forEach((device) => {
        expect(device.status).toEqual(defaultStatus);
    });
});

//Test correct amount of status groups in object
test('correct amount of status groups', () => {
    expect(Object.keys(prepareDeviceGroups(transformDeviceData(dummyData.devices))).length).toBe(4);
});

//Test devices with status are sorted correctly into groups
test('device grouping successful', () => {
    expect(prepareDeviceGroups(dummyData.devices)['Requested'].length).toBe(2);
    expect(prepareDeviceGroups(dummyData.devices)['Purchased'].length).toBe(3);
    expect(prepareDeviceGroups(dummyData.devices)['Shipped'].length).toBe(1);
    expect(prepareDeviceGroups(dummyData.devices)['Installed'].length).toBe(2);
});