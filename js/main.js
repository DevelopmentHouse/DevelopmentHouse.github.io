$(document).ready(function() {
  // facebook app id load
    window.fbAsyncInit = function() {
    FB.init({
      appId      : '1076910152365816',
      xfbml      : true,
      version    : 'v2.6'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

    (function() {
            var canvas = document.getElementById('moon'),
                    context = canvas.getContext('2d');
                    var centerX = canvas.width * 2;
                    var centerY = canvas.height / 2;
                    var radius = 70;      
            // resize the canvas to fill browser window dynamically
            window.addEventListener('resize', resizeCanvas, false);
            
            function resizeCanvas() {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    context.beginPath();
                    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
                    context.fillStyle = '#acacac';
                    context.fill();
                    context.lineWidth = 5;
                    /**
                     * Your drawings need to be inside this function otherwise they will be reset when 
                     * you resize the browser window and the canvas goes will be cleared.
                     */
                    drawStuff(); 
            }
            resizeCanvas();
            
            function drawStuff() {
                    // do your drawing stuff here
            }
    })();
}); 
