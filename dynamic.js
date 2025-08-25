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
      
      // Remove the cursor (border-right) after typing is complete
      typewriterElement.style.borderRight = "none";
    }, 4000); // Stop blinking after 4 seconds (when typing ends)
  });
  
