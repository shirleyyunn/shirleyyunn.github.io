let window1;
let window2;


function windowMove(x, y, delay){
      setTimeout(function() {
      window1.moveTo(x, y);
    }, delay);
}
// BUTTONS ON EXPLORE PAGE 
document.addEventListener('DOMContentLoaded', function() {
const explore1 = document.getElementById('click1');

  explore1.onclick = function() {
    window.open("https://youtu.be/xV5BY-PubeU?si=BK_t-duf83jY8jni", "_blank", "width=400,height=300,top=50,left=50");
    window.open("https://youtu.be/zjWX1z99Q1U?si=witPDJE67U3XT-uu", "_blank", "width=400,height=300,top=100,left=1050");
    window.open("https://youtu.be/0DSgJt1gLJU?si=zykNdYVznF8MeXrw", "_blank", "width=400,height=300,top=600,left=1000");
    window.open("https://youtu.be/DqRC5tquyU0?si=spbkm17FaOq6MnhW", "_blank", "width=400,height=300,top=550,left=700");
    window.open("https://youtu.be/zy9WJgOrUUA?si=ma78mBN05hkVzhQf", "_blank", "width=400,height=300,top=650,left=200");
    window.open("https://youtu.be/9AKRZoCEYNg?si=Gc2RjKXdKVxxa4JM", "_blank", "width=400,height=300,top=350,left=400");
    window.open("https://youtu.be/o2sTHNIoPjc?si=zSRcT-Ftper1XWJy", "_blank", "width=400,height=300,top=250,left=900");
    window.open("https://youtu.be/Rw1Tnt_3Ao8?si=NrUd2krQUPyYGoPU", "_blank", "width=400,height=300,top=250,left=150");
    window.open("https://youtube.com/playlist?list=FLIk2HXet2BffOQVrapKNa2A&si=56c6YMR8BKSB13AN", "_blank", "width=600,height=400,top=250,left=500");
  }
});


document.addEventListener('DOMContentLoaded', function() {
const explore2 = document.getElementById('click2');

  explore2.onclick = function() {
      // Open a new tab/window with a specified URL
    window.open("https://www.coolmathgames.com/", "_blank", "width=400, height=300,top=100,left=50");
    window.open("https://www.animaljam.com/en", "_blank", "width=400, height=300, top=150, left=50");
    windowMove(500,500,5);
  };
});


document.addEventListener('DOMContentLoaded', function() {
const explore3 = document.getElementById('click3');

  explore3.onclick = function () {   
    // Array of image URLs to open
    const imageUrls = [
        'archives/imgs/me1.jpeg',
        'archives/imgs/niu 7.jpeg',
        'archives/imgs/IMG_8118.jpeg',
        'archives/imgs/IMG_0632.jpeg',
        'archives/imgs/IMG_1948.jpeg'
    ];

    // Loop through the array and open each image in a new window/tab
    imageUrls.forEach(url => {
      const screenWidth = window.screen.availWidth;
      const screenHeight = window.screen.availHeight;

      // Generate random X and Y positions
      // Adjust max values to prevent images from going off-screen,
      // considering a typical image size (e.g., 200px width/height)
      const randomX = Math.floor(Math.random() * (screenWidth));
      const randomY = Math.floor(Math.random() * (screenHeight));

      // Open a new window for each image
      window.open(url, '_blank', `width=300,height=270,left=${randomX},top=${randomY}`);
    });
  }
});
