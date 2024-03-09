function logDairy() {
  var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

  for (items of dairy) {
    console.log(items);
  }
}

logDairy();

function birdCan() {
  const animal = {
    canJump: true
  };

  const bird = Object.create(animal);
  bird.canFly = true;
  bird.hasFeathers = true;

  for (let prop of Object.keys(bird)) {
    console.log(prop, ": ", bird[prop]);
  }
}

birdCan();

function animalCan() {
  const animal = {
    canJump: true
  };

  const bird = Object.create(animal);
  bird.canFly = true;
  bird.hasFeathers = true;

  for (let prop in bird) {
    console.log(prop, ": ", bird[prop]);
  }
}

animalCan();
