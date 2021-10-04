import Square from './square';
import Circle from './circle';
import Triangle from '../02_O/triangle';
import Cuboid from '../04_I/cuboid';

class AreaCalculator {
  private readonly shapes;

  constructor(shapes: (Square | Circle | Triangle | Cuboid)[]) {
    this.shapes = shapes;
  }

  sum() {
    let areaShapes = 0;
    this.shapes.forEach((shape) => {
      areaShapes += shape.getArea();
    });
    return `Sum of all areas are ${areaShapes}`;
  }
}

export default AreaCalculator;
