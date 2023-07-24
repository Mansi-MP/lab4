document.addEventListener("DOMContentLoaded", function() {
    const redSlider = document.getElementById("red-slider");
    const greenSlider = document.getElementById("green-slider");
    const blueSlider = document.getElementById("blue-slider");
  
    redSlider.addEventListener("input", updateBackgroundColor);
    greenSlider.addEventListener("input", updateBackgroundColor);
    blueSlider.addEventListener("input", updateBackgroundColor);
  
    function updateBackgroundColor() {
      const redValue = redSlider.value;
      const greenValue = greenSlider.value;
      const blueValue = blueSlider.value;
  
      const newColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
      document.body.style.backgroundColor = newColor;
    }
  });
  