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

 
 Park.prototype.numberOfDailyVisitors = function () {
   let totalVisitors = 0
   for (let dinosaur of this.dinosaurs) {
     totalVisitors += dinosaur.guestsAttractedPerDay
   }
     return totalVisitors
 };
 Park.prototype.numberOfYearlyVisitors = function () {
   return this.numberOfDailyVisitors() * 365;
 };

 Park.prototype.yearRevenue = function () {
  return this.numberOfYearlyVisitors() * this.ticketPrice;
};
module.exports = Park;
