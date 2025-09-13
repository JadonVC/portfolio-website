/* Dynamic Year in Footer*/
document.getElementById('dynamic-year').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function() {
    const typewriterElement = document.getElementById('typewriter');
    
    // Set the typing animation and blinking effect initially
    typewriterElement.style.animation = "typing 4s steps(20) 1s forwards, blink 0.75s step-end infinite";
  
    // After the typing is done (4 seconds), stop the blinking animation
    setTimeout(function() {
      // Stop the blinking by removing it from the animation
      typewriterElement.style.animation = "typing 4s steps(20) 1s forwards"; // Only typing animation now
      
<<<<<<< HEAD
      // Remove the cursor (border-right) after typing is complete
=======
      // Optionally, you can also remove the cursor (border-right) after typing is complete
>>>>>>> 4b80730fb438684ba800dfd04dc72fe7f1bffec5
      typewriterElement.style.borderRight = "none";
    }, 4000); // Stop blinking after 4 seconds (when typing ends)
  });
  
