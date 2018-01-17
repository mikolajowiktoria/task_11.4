var iPhone6 = new Phone("Apple", 2500, "silver", "Full HD");
var samsung6 = new Phone("Samsung", 2000, "black", "Full HD");
var xiaomiMi6 = new Phone("Xiaomi Mi 6", 1500, "pink", "Full HD");

function Phone(brand, price, color, screen){
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.screen = screen;
}
Phone.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.brand + ", o kolorze " + this.color + ", i kosztuje " + this.price + ".");
}
Phone.prototype.printInfoScreen = function(){
    console.log("Telefon " + this.brand + " ma ekran " + this.screen + ".");
}
iPhone6.printInfo();
samsung6.printInfo();
xiaomiMi6.printInfo();
iPhone6.printInfoScreen();
samsung6.printInfoScreen();
xiaomiMi6.printInfoScreen();