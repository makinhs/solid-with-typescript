class Square {
  private readonly length;

  constructor(length) {
    this.length = length;
  }

  getArea() {
    return Math.pow(this.length, 2);
  }
}

export default Square;
