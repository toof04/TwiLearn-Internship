
        var audio = document.getElementById('music');
        var isMuted = false;
        var isHearted = false;
        var isplaying = false;
        

        function playMusic() {
            var playbutton = document.getElementById('playpause');
            if (isplaying) {
                playbutton.innerHTML = '▶';
                 playbutton.style.fontSize="xx-large";
                isplaying = false;
                audio.pause();
            } else {
                playbutton.innerHTML = '▐▐';
                playbutton.style.fontSize="large";
                isplaying = true;
                audio.play();
            }
        }


        function playAgain() {
            audio.currentTime = 0;
            audio.play();
        }

        function toggleMute() {
            if (isMuted) {
                audio.muted = false;
                isMuted = false;
            } else {
                audio.muted = true;
                isMuted = true;
            }
        }

        function toggleHeart() {
            var heartButton = document.getElementById('heart');
            if (isHearted) {
                heartButton.innerHTML = '♡';
                isHearted = false;
            } else {
                heartButton.innerHTML = '♥';
                isHearted = true;
            }
        }

         var audio = document.getElementById('music');
            var seekBarFill = document.querySelector('.seek-bar-fill');
            var seekBar = document.querySelector('.seek-bar');


            function updateSeekBar() {
                var percentage = (audio.currentTime / audio.duration) * 100;
                seekBarFill.style.width = percentage + '%';
            }

            // Seek to the clicked position
            function seek(event) {
                var position = event.offsetX / seekBar.clientWidth;
                audio.currentTime = position * audio.duration;
            }

            // Update the seek bar as the audio plays
            audio.addEventListener('timeupdate', updateSeekBar);

            // Seek to the clicked position when the seek bar is clicked
            seekBar.addEventListener('click', seek);
    