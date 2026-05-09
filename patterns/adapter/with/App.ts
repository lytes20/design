import DistanceAdapter from './DistanceAdapter';
import DistanceCalculator from './DistanceCalculator';
import KilometerDistanceAdapterImplementation from './KilometerDistanceAdapterImplementation';

class App {
  static main(): void {
    const distanceCalculator: DistanceCalculator = new DistanceCalculator();
    // const distanceInMiles = distanceCalculator.computeDistance('Fairfield', 'Austin');

    const distanceAdapter: DistanceAdapter = new KilometerDistanceAdapterImplementation();
    distanceAdapter.setDistanceCalculator(distanceCalculator);

    const distanceInKilometers: number = distanceAdapter.computeDistanceInKilometers(
      'Fairfield',
      'Austin'
    );
    console.log(`The distance is ${distanceInKilometers}km`);
  }
}

App.main();
