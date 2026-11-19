async function getDevices() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    devices.forEach(device => {
        console.log(device.kind, device.label, device.deviceId);
    });
}
getDevices();