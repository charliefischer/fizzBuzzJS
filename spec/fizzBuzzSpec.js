describe('Fizzbuzz', function() {

    var fizzbuzz;

    describe('knows when a number is', function(){
        it('divisible by 3', function(){
            fizzbuzz = new Fizzbuzz();
            expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
        });

        it('divisble by 5', function() {
            fizzbuzz = new Fizzbuzz();
            expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
        });

        it('not divisble by 3', function() {
            fizzbuzz = new Fizzbuzz();
            expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
        });
    });
});
