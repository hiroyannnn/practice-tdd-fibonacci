import { fib } from "../src/fibonacci";

describe("FibonacciTest", () => {
  it("fib", () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
  });
});
