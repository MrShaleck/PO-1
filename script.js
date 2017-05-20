function Phone(brand, price, color, screen) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.screen = screen;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + "The screen size is " + this.screen + ".");
}

var XperiaZ5 = new Phone("Sony", 2300, "black", "5 inches");
var Lumia925 = new Phone("Nokia", 999, "white", "4,5 inches");
var GalaxyS7 = new Phone("Samsung", 2599, "silver", "5,5 inches");

XperiaZ5.printInfo();
Lumia925.printInfo();
GalaxyS7.printInfo();



/**
 * Created by Coshaleck on 20.05.2017.
 */
