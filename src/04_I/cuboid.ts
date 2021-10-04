import ThreeDimensionalShapeInterface from './three-dimensional-shape-interface';
import ShapeInterface from './shape-interface';

// assuming it is a perfect cuboid for easy it up the math
class Cuboid implements ShapeInterface, ThreeDimensionalShapeInterface {
  private readonly length;

  constructor(length) {
    this.length = length;
  }

  calculateThreeDimensionalArea() {
    return Math.pow(this.length, 3);
  }

  getArea() {
    return this.calculateThreeDimensionalArea();
  }
}

export default Cuboid;
