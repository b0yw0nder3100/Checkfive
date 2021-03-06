const checkFive = require("./checkFive")

it('should get the current state of 5', () => {
    expect(checkFive(5)).toEqual(`5 is equal to 5.`);
    expect(checkFive(10)).toEqual(`10 is greater than 5.`);
    expect(checkFive(2)).toMatch(`is less than 5`);
    expect(checkFive(0)).toMatchInlineSnapshot(`"0 is less than 5."`);

    expect(() => checkFive(NaN)).toThrow(
        new Error('Invalid number argument provided')
    );

    expect(() => checkFive(null)).toThrow(
        new Error('Invalid number argument provided')
    );

    expect(() => checkFive(null)).toThrowError(
        'Invalid number argument provided'
    );

    expect(() => checkFive('morgan')).toThrowErrorMatchingInlineSnapshot(
        `"Invalid number argument provided"`
    );

});