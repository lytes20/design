import DistanceAdapter from './DistanceAdapter';
import DistanceCalculator from './DistanceCalculator';

class KilometerDistanceAdapterImplementation implements DistanceAdapter {
  private distanceCalculator: DistanceCalculator;

  computeDistanceInKilometers(origin: string, destination: string): number {
    const distanceInMiles: number = this.distanceCalculator.computeDistance(origin, destination);
    const distanceInKilometers: number = distanceInMiles * 1.609344;
    return distanceInKilometers;
  }
  setDistanceCalculator(distanceCalculator: DistanceCalculator): void {
    this.distanceCalculator = distanceCalculator;
  }
}

export default KilometerDistanceAdapterImplementation;
