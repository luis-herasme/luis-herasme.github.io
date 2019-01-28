class Complex {
  constructor(real, imaginary) {
    this.Re = real;
    this.Im = imaginary;
  }

  add(other) {
    this.Re += other.Re;
    this.Im += other.Im;
  }

  copy() {
    return new Complex(this.Re, this.Im);
  }

  square() {
    this.Re = this.Re * this.Re - this.Im * this.Im;
    this.Im = 2 * this.Im * this.Re;
  }

  getSquare() {
    return new Complex(
      this.Re * this.Re - this.Im * this.Im,
      2 * this.Im * this.Re
    );
  }
}

export default Complex;
