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

         if (currentDeviceId !== selectedDeviceId) {
            currentStream.getTracks().forEach(track => track.stop());
            currentStream = null;
         }
      }

      if (!currentStream){
         currentStream = await navigator.mediaDevices.getUserMedia({
            audio: {
               deviceId: {
                  exact: selectedDeviceId, 
               }
            },
         })
      }

      MediaRecorder = new mediaRecorder(currentStream);
      audioChunks =[];

      mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

      mediaRecorder.onstop = () => {
         const audioBlob = new Blob(audioChunks, {type: 'audio/webm'});
         const audioURL = URL.createObjectURL(audioBlob);
         audioPlayer.src = audioURL;

         startRecBtn.disabled = false;
         stopRecBtn.disabled = true;
      };

      mediaRecorder.start();

      startRecBtn.disabled =true;
      stopRecBtn.disabled =false;
   } catch (err){}
});

stopRecBtn.addEventListener("click", ()=>{
   if(mediaRecorder){
      mediaRecorder.stop();
   }
})

navigator.mediaDevices.addEventListener("devicechange", getMicrophones);
getMicrophones();