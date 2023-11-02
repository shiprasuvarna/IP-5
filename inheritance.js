class SkatingLocation {
constructor(name, address, facilities) {
this.name = name;
this.address = address;
this.facilities = facilities;
}
}
class IndoorRink extends SkatingLocation {
constructor(name, address, facilities, type) {
super(name, address, facilities);
this.type = type || "Indoor";
}
}
class OutdoorPath extends SkatingLocation {
constructor(name, address, facilities, type) {
super(name, address, facilities);
this.type = type || "Outdoor";
}
}
const indoorRink1 = new IndoorRink("Indoor Rink 1", "123 Main St", "Restrooms, 
Snack Bar", "Ice");
const outdoorPath1 = new OutdoorPath("Outdoor Path 1", "456 Park Ave", 
"Benches, Rest Areas");
console.log(indoorRink1);
console.log(outdoorPath1);


// The usage of inheritance allows to create more specific types of skating locations
// The SkatingLocation class serves as the base class. It has a constructor that initializes properties 
// such as name, address, and facilities. The IndoorRink and OutdoorPath class is derived from 
// the SkatingLocation base class using the extends keyword. It inherits the properties and 
// methods from SkatingLocation. It also has its own constructor which calls super() to invoke 
// the constructor of the base class