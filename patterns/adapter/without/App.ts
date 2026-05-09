import DistanceCalculator from './DistanceCalculator';

class App {
  static main(): void {
    const distanceCalculator = new DistanceCalculator();
    const distanceInMiles: number = distanceCalculator.computeDistance('Fairfield', 'Austin');
    const distanceInKilometers: number = distanceInMiles * 1.609344;
    console.log(`The distance is ${distanceInKilometers}km`);
  }
}

App.main();
