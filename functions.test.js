const {
    returnTwo,
    greeting,
    add
} = require("./functions")

test('2 exists', () => {
    expect(returnTwo()).toBe(2)
})

test('Greeting is greeting names', () => {
    expect(greeting('James')).toBe("Hello, James")
    expect(greeting('Jill')).toBe("Hello, Jill")
})

test('Math works', () => {
    expect(add(1,2)).toBe(3)
    expect(add(5,9)).toBe(14)
})
