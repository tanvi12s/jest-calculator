import {add,subtract,multiply,divide,modulus} from '../src/calculator';
// describe("test add function", () => {
//     it("should return 15 for add(10,5)", () => {
//         expect(add(10,5)).toBe(15);
//     });
//     it("should return 5 for add(2,3)", ()=> {
//         expect(add(2,3)).toBe(5);
//     });
// });
test('Add numbers using the add function', () => {
    expect(add(13,5)).toBe(18)
});


test('Subtract numbers using the subtract function', () => {
    expect(subtract(3,5)).toBe(-2)
});

test('Multiply numbers using the multiply function', () => {
    expect(multiply(100,0)).toBe(0)
});

test('Divide numbers using the multiply function', () => {
    expect(divide(90,45)).toBe(2)
});

test('Modulus of two numbers using the modulus function', () => {
    expect(modulus(4,3)).toBe(1)
});