const userService = require("../test_src/userService");
const data = require("../test_src/data");
let connection;

//모든 테스트 종료마다
afterEach(() => {
  data.users.splice(0);
});

//모든 테스트 실행전마다
beforeEach(() => {
  data.users.push(
    { id: 1, email: "user1@test.com" },
    { id: 2, email: "user2@test.com" },
    { id: 3, email: "user3@test.com" }
  );
});

//테스트 시작 전 한번만
// beforeAll(() => {
//   connection = openConnection({ host: "..", port: ".." });
// });

// afterAll(() => {
//   connection.close();
// });

//테스트 종료 시 한번만

test("find all users", () => {
  const users = userService.findAll();

  expect(users).toHaveLength(3);
  expect(users).toContainEqual({ id: 1, email: "user1@test.com" });
  expect(users).toContainEqual({ id: 2, email: "user2@test.com" });
  expect(users).toContainEqual({ id: 3, email: "user3@test.com" });
});

test("create a user", () => {
  const user = { id: "4", email: "user4@test.com" };

  userService.create(user);

  expect(data.users).toHaveLength(4);
  expect(data.users).toContainEqual(user);
});

test("destory a user", () => {
  const id = 3;
  const user = data.users.find(user => user.id === id);

  userService.destroy(id);

  expect(data.users).toHaveLength(2);
  expect(data.users).not.toContainEqual(user);
});

describe("group 1", () => {
  const users = userService.findAll();
  it("test1-1", () => {
    expect(users).toContainEqual({ id: 1, email: "user1@test.com" });
  });
  it("test1-2", () => {
    expect(users).toContainEqual({ id: 2, email: "user2@test.com" });
  });
});
