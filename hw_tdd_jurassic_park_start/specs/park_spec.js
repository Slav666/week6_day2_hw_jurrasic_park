const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let park;
let dinosaur;


  beforeEach(function () {
park = new Park('Matrix', 10)
dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
dinosaur1 = new Dinosaur('m-rex', 'herbivore', 40);
dinosaur2 = new Dinosaur('p-rex', 'carnivore', 30);
dinosaur3 = new Dinosaur('p-rex', 'omnivore', 20);
});


  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Matrix');
  });
  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function() {

    const actual = [];
    assert.deepStrictEqual(actual, park.dinosaurs);
  });

  it('should be able to add a dinosaur to its collection', function() {
      park.addDinosaur(dinosaur);
      const expected = 1;
      assert.strictEqual(expected, park.dinosaurs.length);
    });
  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur2);
    const expected = [dinosaur1];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });
  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur3);
    const actual = park.checkMostVisitedDinosaur();
    const expected = dinosaur;
    assert.strictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur1);
    const expected = [dinosaur2, dinosaur3];
    const actual = park.findDinosaurSpecies('p-rex');
    assert.deepStrictEqual(actual, expected);
  });

it('should calculate the total number of visitors per day', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur1);
    const expected = 140;
    const actual = park.numberOfDailyVisitors();
    assert.strictEqual(actual, expected);
  });
  it('should calculate the total number of visitors per year', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur);
    const expected = 51100;
    actual = park.numberOfYearlyVisitors();
    assert.strictEqual(actual, expected);
  });

  it('should calculate the total revenue from ticket sales for one year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur);
    const expected = 511000;
    actual = park.yearRevenue();
    assert.strictEqual(actual, expected);
  });
});
