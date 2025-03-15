// Complete the js code
function Car(make, model) {
	this.make=make;
	this.model=model;
} 
car.prototype.getMakeModel=fucntion(){
	return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
	car.call(this,make, model);
		this.topSpeed=topSpeed;
}
// Setting up inheritance from Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding getTopSpeed() method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};



// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
