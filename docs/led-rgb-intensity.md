<!--remove-start-->

# LED - RGB Intensity

<!--remove-end-->


Demonstrates changing intensity of an RGB LED. Requires RGB LED on pins that support PWM (usually denoted by ~).





##### RGB LED. (Arduino UNO)


Basic example with RGB LED connected to pins 6, 5, and 3 for red, green, and blue respectively.


![docs/breadboard/led-rgb.png](breadboard/led-rgb.png)<br>

Fritzing diagram: [docs/breadboard/led-rgb.fzz](breadboard/led-rgb.fzz)

&nbsp;




Run with:
```bash
node eg/led-rgb-intensity.js
```


```javascript
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Initialize the RGB LED
  var led = new five.Led.RGB([6,5,3]);

  // Set to full intensity red
  console.log("100% red");
  led.color("#FF0000");


  // After 3 seconds, dim to 30% intensity
  setTimeout(function() {
    console.log("30% red");
    led.intensity(30);

    // 3 secs then turn blue, still 30% intensity
    setTimeout(function() {
      console.log("30% blue");
      led.color("#0000FF");

      // Another 3 seconds, go full intensity blue
      setTimeout(function() {
        console.log("100% blue");
        led.intensity(100);
      }, 3000);

    }, 3000);

  }, 3000);

});
```








&nbsp;

<!--remove-start-->

## License
Copyright (c) 2012, 2013, 2014 Rick Waldron <waldron.rick@gmail.com>
Licensed under the MIT license.
Copyright (c) 2014, 2015 The Johnny-Five Contributors
Licensed under the MIT license.

<!--remove-end-->