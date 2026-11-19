async function getDevices() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    devices.forEach(device => {
        console.log(device.king, device.label, device.deviceId);
    });
}

