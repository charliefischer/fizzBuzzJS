class Fizzbuzz {
    _isDivisibleByThree(number) {
      return number % 3 === 0;
    };
    _isDivisibleByFive(number) {
      return number % 5 === 0;
    };
    _isDivisibleByFifteen(number) {
        return number % 15 === 0;
    };
    result(number) {
    if(this._isDivisibleByFifteen(number)){
            return "FizzBuzz"
      }else if(this._isDivisibleByFive(number)){
          return "Buzz";
      }else if(this._isDivisibleByThree(number)){
            return "Fizz";
      }else {
          return number;
      };
    };
};
