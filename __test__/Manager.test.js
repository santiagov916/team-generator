const Manager = require('../lib/Manager');

test("Can instantiate Employee instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
  });

  test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Manager(testValue);
    expect(e.getName()).toBe(testValue);
  });

  test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Manager("Foo", testValue);
    expect(e.getId()).toBe(testValue);
  });

  test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Manager("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });

  test("Can get office number via getOfficeNumber()", () => {
      const testValue = "00001";
      const e = new Manager("Foo", 100, "test@email.com", testValue);
      expect(e.getOfficeNumber()).toBe(testValue);
  });

