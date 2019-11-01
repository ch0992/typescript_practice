// const mockFn = jest.fn();
// mockFn();
// mockFn(1);
// mockFn("a");
// mockFn([1, 2], { a: "b" });

// mockFn.mockReturnValue("I am a mock!");
// console.log(mockFn());
const axios = require("axios");
const userService = require("../test_src/axios");

test("findOne returns a user", async () => {
  const user = await userService.findOne(1);
  expect(user).toHaveProperty("id", 1);
  expect(user).toHaveProperty("name", "Leanne Graham");
});

test("findOne fetches data from the API endpoint", async () => {
  const spyGet = jest.spyOn(axios, "get");
  await userService.findOne(1);
  expect(spyGet).toBeCalledTimes(1);
  expect(spyGet).toBeCalledWith("https://jsonplaceholder.typicode.com/users/1");
});

test("findOne returns what axios get returns", async () => {
  axios.get = jest.fn().mockReturnValue({
    data: {
      id: 1,
      name: "Dale Seo"
    }
  });

  const user = await userService.findOne(1);
  expect(user).toHaveProperty("id", 1);
  expect(user).toHaveProperty("name", "Dale Seo");
});
