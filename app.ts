/*const spiderman = (person: String) => {
  return 'Hello, ' + person;
}

let user = 'Peter Parker';
console.log(spiderman(user));


interface OS {
  name: string,
  language: String,
}

const desert = (type: OS): void => {
  console.log('Android ' + type.name + ' has ' + type.language + ' language');
};

const nougat = {
  name: 'N',
  language: 'Java'
}

desert(nougat);

*/

class Car {
  model: String;
  doors: Number;
  isElectric: Boolean;

  constructor(model: String, doors: Number, isElectric: Boolean) {
    this.model = model;
    this.doors = doors;
    this.isElectric = isElectric;
  }

  make(): void {
    console.log(`This car is ${this.model} which has ${this.doors} doors and is ${this.isElectric}`);
  }
}

let newCar = new Car('Innova', 5, true);
newCar.make();



class Auto {
  model: String;
  doors: Number;
  isElectric: Boolean;
  
  constructor(model: String, doors: Number, isElectric: Boolean) {
      this.model = model;
      this.doors = doors;
      this.isElectric = isElectric;
  }

  make(): void {
      console.log(`This car is ${this.model} which has ${this.doors} doors and is ${this.isElectric}` );
  }
}
let newAuto = new Auto('Innova', 4, false);
newAuto.make();


