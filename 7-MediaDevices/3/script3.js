async function getDevices() {
    await navigator.mediaDevices.getUserMedia({video: true, audio:true});
    const devices = await navigator.mediaDevices.enumerateDevices();
    devices.forEach(device => {
        console.log(device.kind, device.label, device.deviceId);
    });
}
getDevices();