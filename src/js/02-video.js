import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', function(data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
});

document.addEventListener('DOMContentLoaded', function() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(parseFloat(currentTime));
  }
});

player.on('timeupdate', throttle(function(data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));