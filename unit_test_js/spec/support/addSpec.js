const helloWorld = () => {
  return "hello world";
};

function add(a, b) {
  return a + b;
}

const intArray = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  return arr.reduce((acc, val) => acc + val, 0);
};
console.log("sumArray", sumArray(intArray));

const isEvenNumber = (num) => {
  if (num % 2 == 0) return true;
  else return false;
};

describe("Hello world", function () {
  it("says world", function () {
    expect(helloWorld()).toContain("world");
    expect(helloWorld()).not.toContain("World");
  });
  it("add function", () => {
    expect(add(2, 3)).toEqual(5);
  });
  it("sum of array element", () => {
    const intArray = [1, 2, 3, 4, 5];
    expect(sumArray(intArray)).toEqual(15);
    expect(sumArray(intArray)).toBeTruthy();
  });
  it("check for even number", () => {
    expect(isEvenNumber(40)).toBeTruthy();
    expect(isEvenNumber(39)).toBeFalsy();
  });

  it("check in object", () => {
    var dog = { name: "Fido" };
    expect([{ name: "Spike" }, { name: "Fido" }, { name: "Spot" }]).toContain(
      dog
    );
  });
  it("check for undefine", () => {
    var somethingElseUndefined;
    expect(somethingElseUndefined).toBeUndefined(); // success
    expect(12).toBeDefined(); // failure
    expect(null).toBeNull();
    expect(5).not.toBeNaN(); // success
    expect(0 / 0).toBeNaN(); // success
    expect(parseInt("hello")).toBeNaN();
    expect("Hello world").toEqual(jasmine.any(String));
    expect({}).toEqual(jasmine.any(Object));
  });
});
