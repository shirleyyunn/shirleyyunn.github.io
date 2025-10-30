let theConfirm, thePrompt;
let currentFileName = "Screenshot 2025-10-15 at 5.34.04 PM.png";
let currentFile;
let backgroundImage;
let bgWidth, bgHeight;


function preload() {
  backgroundImage = loadImage('Screenshot 2025-10-15 at 5.34.04 PM.png');
  currentFile = loadImage('Screenshot 2025-10-15 at 5.34.04 PM.png');
}

function setup() {

    setTimeout(() => {
     alert("Before I let you In");
     alert("I'll admit that this is a little vulnerable");
     alert("Some aspects of my living shouldn't really have been seen by other eyes");
     alert("But it's ok, I'll let y'all see");

      theConfirm = confirm("Feel free to take notes as you explore");     
      console.log(theConfirm);

      if (theConfirm) {
         save('Feel_Free_To_Write_Some_Notes'); 
       }

      alert("Thank you! Welcome to my Computer :3");

     thePrompt = prompt("Just in case I need it back later, how can I get in touch?");
          console.log(thePrompt);
    }, 1500); 
}


