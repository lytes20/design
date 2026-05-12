class RandomNumberGenerator {
  private readonly min: number;
  private readonly max: number;

  /** Use static factories: {@link RandomNumberGenerator.fromZeroTo}, {@link RandomNumberGenerator.between}. */
  private constructor(min: number, max: number) {
    RandomNumberGenerator.assertInclusiveIntRange(min, max);
    this.min = min;
    this.max = max;
  }

  /** Integers uniformly from 0 through max (inclusive). */
  static fromZeroTo(max: number): RandomNumberGenerator {
    return new RandomNumberGenerator(0, max);
  }

  /** Integers uniformly from min through max (inclusive). */
  static between(min: number, max: number): RandomNumberGenerator {
    return new RandomNumberGenerator(min, max);
  }

  private static assertInclusiveIntRange(min: number, max: number): void {
    if (!Number.isFinite(min) || !Number.isFinite(max)) {
      throw new RangeError('min and max must be finite numbers');
    }
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
      throw new TypeError('min and max must be integers');
    }
    if (min > max) {
      throw new RangeError('min must be <= max');
    }
  }

  /** Uniform random integer in [min, max] (inclusive). */
  next(): number {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}

export default RandomNumberGenerator;
