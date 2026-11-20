const video = document.getElementById('video');

const toggleAudioBtn = document.getElementById('toggleAudio');
const toggleVideoBtn = document.getElementById('toggleVideo');

let stream;

async function startStream(){
   try {
      stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
     });

         video.srcObject = stream;
   } catch (err) {
      console.error(`Ошибка при доступе к камере/микрофону: ${err}`);
   }
}

startStream();