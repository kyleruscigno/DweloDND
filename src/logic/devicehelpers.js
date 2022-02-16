import strings from '../resources/strings.js'

//Update status field of device and move to correct group
export function moveDevice(deviceGroups, device, prevGroup, newGroup) {
    let newGroups = Object.assign({}, deviceGroups);
    let index = deviceGroups[prevGroup].findIndex(dev => dev.id === device.id);
    newGroups[prevGroup].splice(index, 1);
    device.status = newGroup;
    newGroups[newGroup].push(addStatusComment(device, newGroup));
    return newGroups;
}

//Add comment for the status update
function addStatusComment(device, newStatus) {
    let newDeviceData = device;
    newDeviceData.comments.push({
        created_at: new Date().getTime(),
        comment: strings.NEW_STATUS_COMMENT.replace('%STATUS%', newStatus),
    });
    return newDeviceData;
}