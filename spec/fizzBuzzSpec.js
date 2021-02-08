describe('Fizzbuzz', function() {

    var fizzbuzz;

    describe('knows when a number is', function(){
        it('divisible by 3', function(){
            fizzbuzz = new Fizzbuzz();
            expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
        });

        it('not divisible by 3', function() {
            fizzbuzz = new Fizzbuzz();
            expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
        });


        it('divisible by 5', function() {
            fizzbuzz = new Fizzbuzz();
            expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
        });

        it('not divisible by 5', function() {
            fizzbuzz = new Fizzbuzz();
            expect(fizzbuzz.isDivisibleByFive(7)).toBeFalsy();
        });

        it('is divisible by 15', function() {
            fizzbuzz = new Fizzbuzz();
            expect(fizzbuzz.isDivisibleByFifteen(15)).toBeTruthy();
        });

    });
});
