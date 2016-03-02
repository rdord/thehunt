var weirdGif, img;
function preload() {
  var url = 'http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag=weird';
  weirdGif = loadJSON(url);
}

function setup() {
  noLoop();
  img = createImg(weirdGif.data.fixed_width_small_url);
}

function draw() {
  console.log(weirdGif.data.fixed_width_small_url);
}