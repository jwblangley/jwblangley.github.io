const ANIM_DELTA = 500;

$(document).ready(function() {
  playIntro();
});

function playIntro() {
  $('.name-tagline').hide().delay(2 * ANIM_DELTA).fadeIn(ANIM_DELTA);
}
