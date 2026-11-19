navigator.mediaDevices.getUserMedia({ video: true})
 .then(stream => {
    const [videoTrack] = stream.getVideoTracks();
    return videoTrack.applyConstraints({
        width: 1280,
        height: 720
    }).then (()=> {
        console.log('Разрешение применено');
    })
     .catch(error => {
        console.error('Ошибка доступа к устройству', error);
     });

 });