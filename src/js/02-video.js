//імпорт модуля
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//плеер
const player = new Player('vimeo-player');

player.on('timeupdate',  throttle(() => {
   player.getCurrentTime().then(function(seconds) {
    // seconds = the current playback position
       localStorage.setItem('videoplayer-current-time', seconds);
   
}).catch(function(error) {
    // an error occurred
});
}, 1000))


document.addEventListener('DOMContentLoaded', () => {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
})


