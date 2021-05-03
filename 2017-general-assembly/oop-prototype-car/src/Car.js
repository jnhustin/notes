function Car(make, model, year, color, seats) {
  this.make = make;
  this.model = model;
  this.year = year;
  // TODO: add color, seats here

  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];
}

Car.prototype.sell = function(newOwner) {
  return newOwner;
};

Car.prototype.paint = function(newColor) {
  return newColor;
};

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
