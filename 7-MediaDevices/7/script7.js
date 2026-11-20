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
   } catch (err) {}
}