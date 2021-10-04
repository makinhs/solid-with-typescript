class Triangle {
  private readonly height;
  private readonly base;

  constructor(height, base) {
    this.height = height;
    this.base = base;
  }

  getArea() {
    return (this.height * this.base) / 2;
  }
}

export default Triangle;
