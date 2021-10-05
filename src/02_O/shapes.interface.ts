import Square from '../01_S/square';
import Circle from '../01_S/circle';
import Triangle from './triangle';
import Cuboid from '../04_I/cuboid';

export interface ShapesInterface {
  [index:number]: Square|Circle|Triangle|Cuboid;
}