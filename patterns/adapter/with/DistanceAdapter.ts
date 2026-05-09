import DistanceCalculator from './DistanceCalculator';

export default interface DistanceAdapter {
  computeDistanceInKilometers(origin: string, destination: string): number;
  setDistanceCalculator(distanceCalculator: DistanceCalculator): void;
}
