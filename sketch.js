let theConfirm, thePrompt;
let currentFileName = "Screenshot 2025-10-15 at 5.34.04 PM.png";
let currentFile;
let backgroundImage;
let bgWidth, bgHeight;


function preload() {
  // Load the background image first to ensure it's ready before setup
  backgroundImage = loadImage('Screenshot 2025-10-15 at 5.34.04 PM.png');
  currentFile = loadImage('Screenshot 2025-10-15 at 5.34.04 PM.png');
}

function setup() {
//   // createCanvas(windowWidth, windowHeight);

//   // // Calculate the aspect ratio of the background image
//   // let imgAspect = backgroundImage.width / backgroundImage.height;

//   // // Calculate the new width and height to maintain the aspect ratio
//   // if (windowWidth / windowHeight > imgAspect) {
//   //   bgHeight = windowHeight;
//   //   bgWidth = bgHeight * imgAspect;
//   // } else {
//   //   bgWidth = windowWidth;
//   //   bgHeight = bgWidth / imgAspect;
//   // }
//   noCanvas();

  // Set up a timeout to display alerts after the background is drawn
    setTimeout(() => {
     alert("Before I let you In");
     alert("I'll admit that this is a little vulnerable");
     alert("Some aspects of my living shouldn't really have been seen by other eyes");
     alert("But it's ok, I'll let y'all see");

      // Confirm with a Yes/No dialog and save response to variable
      theConfirm = confirm("Read a little bit about myself before you start clicking");     
      console.log(theConfirm);

      if (theConfirm) {
         // Save the file if the user confirms
         save('Welcome to the NHK .txt'); // Use the `save` function to download the image
       }

      alert("Thank you! Welcome to my Computer :3");

     // Prompt for user input
     thePrompt = prompt("Just in case I need it back later, how can I get in touch?");
          console.log(thePrompt);
    }, 1500); // Delay the alerts slightly to allow the background to render
}


