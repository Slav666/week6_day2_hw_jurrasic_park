const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs  = [];
  // this.diet = diet;
  // this.guestsAttractedPerDay = guestsAttractedPerDay;
}
Park.prototype.addDinosaur = function (dinosaur) {
	 this.dinosaurs.push(dinosaur);
}
Park.prototype.removeDinosaur = function (dinosaur) {
	 this.dinosaurs.pop(dinosaur);
}

// zmienic !!!!!
Park.prototype.checkMostVisitedDinosaur = function () {
  let numberOfVisitors = 0
  let dinosaurToFind = null
  for (let dinosaur of this.dinosaurs) {
    if (numberOfVisitors < dinosaur.guestsAttractedPerDay) {
    numberOfVisitors = dinosaur.guestsAttractedPerDay
      dinosaurToFind = dinosaur
    }
  }
  return dinosaurToFind;
}

 Park.prototype.findDinosaurSpecies = function(species) {
   const dinosaurSpecies = this.dinosaurs.filter(dinosaur => dinosaur.species === species);
   return dinosaurSpecies
 }

 // Park.prototype.removeDinosaurBySpiecies = function(dinosaurToRemove) {
 //   const numberOfDinosaurs = this.dinosaurs.filter(dinosaur => dinosaur.species !== dinosaurToRemove.species);
 //   this.dinosaurs = numberOfDinosaurs
 // }


module.exports = Park;
