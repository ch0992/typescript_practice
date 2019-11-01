test("1 is 1", () => {
  expect(1).toBe(1);
});

let getUser = id => {
  if (id <= 0) throw new Error("Invalid ID");
  return {
    id,
    email: `user${id}@test.com`
  };
};

test("return a user object", () => {
  expect(getUser(1)).toStrictEqual({
    id: 1,
    email: `user1@test.com`
  });
});

test("number 0 is falsy but string 0 is truthy", () => {
  expect(0).toBeFalsy();
  expect("0").toBeTruthy();
  //   expect(0).toBeTruthy();
  //   expect("0").toBeFalsy();
});

test("array", () => {
  const colors = ["Reds", "Yellow", "Blue"];
  expect(colors).toHaveLength(3);
  expect(colors).toContain("Yellow");
  expect(colors).not.toContain("Green");
});

test("string", () => {
  expect(getUser(1).email).toBe("user1@test.com");
  expect(getUser(2).email).toMatch(/.*test.com$/);
});

test("throw when id is non negative", () => {
  expect(() => getUser(-1).toThrow());
  expect(() => getUser(-1).toThrow("Invalid ID"));
});
