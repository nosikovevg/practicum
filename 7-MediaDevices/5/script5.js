navigator.mediaDevices.getUserMedia({ audio: true})
 .then( () =>{
   const audioElement = document.querySelector('audio');

   return navigator.mediaDevices.enumerateDevices()
    .then(devices=> {
      const device = devices.find(d => d.kind === 'audiooutput');
      if (device) {
         return audioElement.setSinkId(device.deviceId)
            .then(()=> {
               console.log(`Звук пойдёт на: ${device.label}`);
            })
            .catch(err => {
               console.error('Ошибка при смене выхода:', err);
            });
      } else {
         console.warn('Нет доступных устройств выхода звука');
      }
    })
 })
     .catch(error => {
        console.error('Ошибка при получении доступа к аудио устройству', error);
     });

