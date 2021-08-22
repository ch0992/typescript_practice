const rewire = require("rewire")
const type_annotation = rewire("./type_annotation")
const display = type_annotation.__get__("display")
// @ponicode
describe("display", () => {
    test("0", () => {
        let callFunction = () => {
            display("a85a8e6b-348b-4011-a1ec-1e78e9620782", 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            display(10, "dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            display("bar", "dummyName123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            display(-10, "dummyName")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            display(10, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            display(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
