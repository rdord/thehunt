var stickerArray = [], stickerURLArray = [], animationData;

function getStickers(tag, howMany) {
  var url = 'http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag=' + tag;

  for(var i=0; i<howMany; i++) {
    var giphyStickerObject = loadJSON(url);
    stickerArray.push(giphyStickerObject);
  }
}

function preload() {
  getStickers('weird', 10);
  animationData = loadJSON('animations.json');
}

function setup() {
  noCanvas();
  noLoop();
  var img = document.createElement('img');
  document.getElementById('GifHolder').appendChild(img);
  
  for(var i = 0; i < stickerArray.length; i++) {
    var sticker = stickerArray.pop();
    stickerURLArray.push(sticker.data.image_original_url);
  }

  img.src = stickerURLArray.pop();

  hunt(document.getElementById('GifHolder'), {
    in: function() {
      // random animation
      var randomNumber = random(0, animationData.animations.length);
          randomNumber = Math.round(randomNumber);
      var animationType = animationData.animations[randomNumber];
      var imgClassList = this.getElementsByTagName('img')[0].classList;
      imgClassList.add('animated');
      imgClassList.add(animationType);
    },
    out: function() {
      // remove animation
      this.getElementsByTagName('img')[0].className = "";

      // change img src   
      img.src = stickerURLArray.pop();
      
    },
    persist: true
  });  
}

function draw() {

}