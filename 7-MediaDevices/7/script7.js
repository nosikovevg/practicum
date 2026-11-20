const startRecBtn = document.getElementById('startRec');
const stopRecBtn = document.getElementById('stopRec');

const audioPlayer = document.getElementById('audioPlayer');
const micSelect = document.getElementById('micSelect');

let mediaRecorder;
let audioChunks =[];
let currentStream;

async function getMicrophones() {
   try {
      await navigator.mediaDevices.getUserMedia({
         audio: true,
      });
      const devices = await navigator.mediaDevices.enumerateDevices();
      const microphones = devices
                           .filter(({kind}) => kind === 'audioinput');

      micSelect.innerHTML ="";

      microphones.forEach((mic) => {
         const option = document.createElement("option");
         option.value = mic.deviceId;
         option.textContent = mic.label;
         
         micSelect.appendChild(option);
      })
   } catch (err) {
      console.error(err);
   }
}

startRecBtn.addEventListener("click", async () =>{
   try {
         const selectedDeviceId = micSelect.value;
      if (currentStream){
         const currentAudioTrack = currentStream.getAudioTracks()[0];
         const currentDeviceId = currentAudioTrack.getSettings().deviceId;

         if ()
      }
   } catch (err){}
});