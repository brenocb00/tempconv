class Celsius {
    constructor(value) {
      this.value = value;
    }
  
    toString() {
      return `${this.value}°C`;
    }
  }
  
  class Fahrenheit {
    constructor(value) {
      this.value = value;
    }
  
    toString() {
      return `${this.value}°F`;
    }
  }
  
  const AbsoluteZeroC = new Celsius(-273.15);
  const FreezingC = new Celsius(0);
  const BoilingC = new Celsius(100);
  
  function CToF(celsius) {
    return new Fahrenheit(celsius.value * 9 / 5 + 32);
  }
  
  function FToC(fahrenheit) {
    return new Celsius((fahrenheit.value - 32) * 5 / 9);
  }
  
  module.exports = {
    Celsius,
    Fahrenheit,
    AbsoluteZeroC,
    FreezingC,
    BoilingC,
    CToF,
    FToC
  };
  