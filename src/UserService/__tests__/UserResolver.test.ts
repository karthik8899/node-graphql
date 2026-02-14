import { UserResolver } from "../UserResolver";

describe('UserResolver', () => {
  it('sample() should return "Hello"', () => {
    const resolver = new UserResolver();
    const result = resolver.sample();
    expect(result).toBe("Hello");
  });
});
