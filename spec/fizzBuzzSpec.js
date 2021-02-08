describe('Fizzbuzz', function() {

    var fizzbuzz;

    beforeEach(function() {
        fizzbuzz = new Fizzbuzz();
    });

    describe('knows when a number is', function(){
        it('divisible by 3', function(){
            expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
        });

        it('not divisible by 3', function() {
            expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
        });


        it('divisible by 5', function() {
            expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
        });

        it('not divisible by 5', function() {
            expect(fizzbuzz.isDivisibleByFive(7)).toBe(false);
        });

        it('is divisible by 15', function() {
            expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
        });

        it('not divisible by 15', function() {
          expect(fizzbuzz.isDivisibleByFifteen(16)).toBe(false);
        });
    });

    describe('returns the correct string or number', function() {
        it('returns fizz when divisible by three', function() {
            expect(fizzbuzz.result(3)).toBe("Fizz")
        });
    });
});
