// https://www.youtube.com/watch?v=u6CT_fbFBdQ

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Всё в порядке! Можно работать.
    navigator.mediaDevices.getUserMedia({video: true, audio:true})
} else {
    console.warn('Ваш браузер не поддерживает медиаустройства')
}

