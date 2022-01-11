let animals = [] as string[];

animals['first'] = 'Cat';
animals['second'] = 'Dog';

console.log('for of: \n');

for (let animal of animals) {
    console.log(animal);
}

console.log('\nfor in: \n');

for (let animal in animals) {
    console.log(animal);
}