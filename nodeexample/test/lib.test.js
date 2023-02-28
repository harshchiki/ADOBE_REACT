let {expect} = require('chai'); // installed in node_modules
let {forEach, filter} = require('../src/lib'); // user defined module
// Test Suite
describe("testing lib module", () => {
    // test spec like @Test
    it("testing forEach", () => {
        const action = jest.fn(); // mock function
        forEach([4,10,21,55,11], action);
        console.log(action.mock.calls);
        expect(action.mock.calls.length).to.equal(5);
        expect(action.mock.calls[0][0]).to.equal(4);
        expect(action.mock.calls[1][0]).to.equal(10);
        expect(action.mock.calls[2][0]).to.equal(21);
    });

    it("testing filter", () => {
        // if a function has a dependency --> use mock
        const predicate = jest.fn(x => x % 2 === 0);
        var res = filter([3,20,51,4,10], predicate);
        expect(res.length).to.equal(3);
    });
    // test map function
});