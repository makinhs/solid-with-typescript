import Square from './square';
import Circle from './circle';
import Triangle from '../02_O/triangle';
import Cuboid from '../04_I/cuboid';
import {ShapesInterface} from '../02_O/shapes.interface';

class AreaCalculator {
  private readonly shapes;

  constructor(shapes: ShapesInterface) {
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
