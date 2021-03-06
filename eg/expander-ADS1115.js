var Barcli = require("barcli");
var five = require("../lib/johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var virtual = new five.Board.Virtual(
    new five.Expander("ADS1115")
  );

  virtual.io.analogPins.forEach(function(input) {

    var bar = new Barcli({ label: input, range: [0, 1023] });

    // Initialize a Sensor instance with
    // the virtual board created above
    var sensor = new five.Sensor({
      pin: input,
      board: virtual
    });

    // Display all changes in the terminal
    // as a Barcli chart graph
    sensor.on("change", function() {
      bar.update(this.value);
    });
  });
});
