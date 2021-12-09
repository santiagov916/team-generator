const Engineer = require('../lib/Engineer');

test("Can instantiate Employee instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
  });

  test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Engineer(testValue);
    expect(e.getName()).toBe(testValue);
  });

  test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Engineer("Foo", 100, testValue);
    expect(e.getEmail()).toBe(testValue);
  });

test("Can get github via getGithub()", () => {
    const testValue = "githubname";
    const e = new Engineer("Foo", 100, "test@test.com", testValue);
});