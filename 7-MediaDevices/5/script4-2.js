navigator.mediaDevices.getUserMedia({ audio: true})
 .then(stream => {
    const [audioTrack] = stream.getAudioTracks();
    audioTrack.enabled=false;
    console.log('Микрофон выключен');
    })
     .catch(error => {
        console.error('Ошибка доступа к устройству', error);
     });

