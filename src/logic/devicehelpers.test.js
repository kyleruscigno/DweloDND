import { moveDevice } from './devicehelpers';
import strings from '../resources/strings';

const dummyData = {
    "Requested": [
        { "id": 1, "status": "Requested", "name": "light switch 1", "type": "SWITCH", "state": "off", "comments": [],},
        { "id": 2, "status": "Requested", "name": "light switch 4", "type": "SWITCH", "state": "off", "comments": [],},
        { "id": 3, "status": "Requested", "name": "hallway dimmer", "type": "DIMMER", "level": 0.85, "comments": [],},
    ],
    "Purchased": [
        { "id": 4, "status": "Purchased", "name": "door lock", "type": "LOCK", "codes": [ "1234", "2345", "3456", "4567" ], "locked": true, "comments": [],},
    ],
    "Shipped": [
        { "id": 5, "status": "Shipped", "name": "hallway dimmer", "type": "DIMMER", "level": 0.85, "comments": [],},
    ],
    "Installed": [
        { "id": 6, "status": "Installed", "name": "thermostat", "type": "THERMO", "temp": 72.0, "mode": "AUTO", "comments": [],}
    ],
}

const testDevice = { "id": 1, "status": "Requested", "name": "light switch 1", "type": "SWITCH", "state": "off", "comments": [],};

//Test object moved successfully
test('device moved successfully', () => {
    const newGroups = moveDevice(dummyData, testDevice, "Requested", "Installed");
    newGroups["Requested"].forEach((device) => {
        expect(device.id).not.toBe(1);
    });
    expect(newGroups["Requested"].length).toEqual(2);
    expect(newGroups["Installed"].length).toEqual(2);
    const arrLength = newGroups["Installed"].length;
    const device = newGroups["Installed"][arrLength - 1];
    expect(device.status).toEqual("Installed");
});

//Test comment added successfully
test('comment added to device', () => {
    const newGroups = moveDevice(dummyData, testDevice, "Requested", "Installed");
    const arrLength = newGroups["Installed"].length;
    const device = newGroups["Installed"][arrLength - 1];
    let testComment = strings.NEW_STATUS_COMMENT.replace("%STATUS%", "Installed");
    expect(device.comments[0].comment).toEqual(testComment);
});