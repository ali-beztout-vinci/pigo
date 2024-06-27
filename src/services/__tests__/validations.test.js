// __tests__/validations.test.js
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return an error message if gamertag length is less than 8 characters', () => {
        const result = isValid('user1');
        expect(result).toBe("Invalid - gamertag length must be at least 8 characters");
    });

    test('should return an error message if gamertag does not contain a special character', () => {
        const result = isValid('username1');
        expect(result).toBe("Invalid - gamertag must contain at least a special character");
    });

    test('should return an error message if gamertag does not contain a number', () => {
        const result = isValid('username!');
        expect(result).toBe("Invalid - gamertag must contain at least a number");
    });

    test('should return true for a valid gamertag', () => {
        const result = isValid('user!name1');
        expect(result).toBe(true);
    });

    test('should return true for another valid gamertag', () => {
        const result = isValid('aBcDeFgH1!');
        expect(result).toBe(true);
    });

    test('should return an error message if gamertag is exactly 8 characters but missing special character and number', () => {
        const result = isValid('abcdefgh');
        expect(result).toBe("Invalid - gamertag must contain at least a special character");
    });

    test('should return an error message if gamertag contains special character but no number', () => {
        const result = isValid('abcdefg!');
        expect(result).toBe("Invalid - gamertag must contain at least a number");
    });

    test('should return an error message if gamertag contains number but no special character', () => {
        const result = isValid('abcdefg1');
        expect(result).toBe("Invalid - gamertag must contain at least a special character");
    });
});
