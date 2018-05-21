// 1
describe('positiveSum', () => {
    // 1.1
    it('should return the sum of all the numbers \
    when the numbers are all positive', () => {
        expect(positiveSum([1])).toBe(1);
        expect(positiveSum([10, 5, 0.1])).toBe(15.1);
    });

    // 1.2
    it('should not add the negative numbers into the sum \
    when there is a negative number in the provided array', () => {
        expect(positiveSum([-5, 4, 3])).toBe(7);
    });

    // 1.3
    it('should return 0 when the provided array is empty', () => {
        expect(positiveSum([])).toBe(0);
    });

    // 1.4
    it('should return 0 \
    when the provided array is all negative numbers', () => {
        expect(positiveSum([-1, -2, -3])).toBe(0);
    })
});


// 2
describe('isDivisible ', () => {
    // 2.1
    it('should return true \
    when a number is divisible by both of the provided divisors', () => {
        expect(isDivisible(6, 2, 3)).toBe(true);
        expect(isDivisible(6, 6, 6)).toBe(true);
        expect(isDivisible(-1.6, -0.4, -0.2)).toBe(true);
    });

    // 2.2
    it('should return false \
    when the number is samller than both the provided divisors', () => {
        expect(isDivisible(0, 1, 1)).toBe(false);
        expect(isDivisible(-8, -2, 4)).toBe(false);
        expect(isDivisible(6, 12, 24)).toBe(false);
    });

    // 2.3
    it('should return false when the number \
    is not divisible by only one of the provided divisors', () => {
        expect(isDivisible(6, 3, 4)).toBe(false);
        expect(isDivisible(6, 0, 3)).toBe(false);
    });

    // 2.4
    it('should return false when the number \
    is not divisible by any of the provided divisors', () => {
        expect(isDivisible(6, 0, 0)).toBe(false);
        expect(isDivisible(7, 2, -3)).toBe(false);
    });
});


// 3
describe('solution', () => {
    // 3.1
    it('should return itself \
    when there is only 1 character in the string', () => {
        expect(solution('1')).toBe('1');
        expect(solution(' ')).toBe(' ');
    });

    // 3.2
    it('shoud return the reversed string \
    when there are multiple characters in the string', () => {
        expect(solution('ab')).toBe('ba');
        expect(solution('123')).toBe('321');
        expect(solution('a\n\tb')).toBe('b\t\na');
    });

    // 3.3
    it('should return empty string \
    when there are no characters in the string', () => {
        expect(solution('')).toBe('');
    });
});


// 4
describe('reverseSeq', () => {
    // 4.1
    it('should return an array of numbers if the provided number is greater than 1; \
    the numbers in the array should form an arithmetic sequence \
    that starts with the provided number and has a common difference of -1; \
    the last number in the array should be between 1 (inclusive) and 0 (exclusive).', () => {
        expect(reverseSeq(3)).toEqual([3, 2, 1]);
        expect(reverseSeq(5.5)).toEqual([5.5, 4.5, 3.5, 2.5, 1.5, 0.5]);
    });

    // 4.2
    it('should return an array that contains only the provided number itself \
    if the number is between 1 (inclusive) and 0 (exclusive)', () => {
        expect(reverseSeq(1)).toEqual([1]);
        expect(reverseSeq(0.001)).toEqual([0.001]);
    });

    // 4.3
    it('should return an empty array \
    if the given number is less than or equal to 0', () => {
        expect(reverseSeq(0)).toEqual([]);
        expect(reverseSeq(-1)).toEqual([]);
    });

    // 4.4
    it('should treat the given argument as a number \
    if the argument is a string that reperesents a numeric value', () => {
        expect(reverseSeq('5')).toEqual([5, 4, 3, 2, 1]);
        expect(reverseSeq('0')).toEqual([]);
    });

    // 4.5
    it('should return an empty array \
    if the given argument does not represent a numeric value', () => {
        const testList = [
            'a',
            NaN,
            [],
            {},
            () => {},
            true,
            undefined,
            null
        ];
        for (const item of testList) {
            expect(reverseSeq(item)).toEqual([]);
        }
    });

    //4.6
    it('should throw an error if the given number is Infinity', () => {
        expect(() => {
            // Passing in Infinity will cause an infinite loop 
            // reverseSeq(Infinity)
        }).toThrow();
    });
});