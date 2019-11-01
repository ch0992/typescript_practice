let fetchUser = (id, cb) => {
  setTimeout(() => {
    console.log("wait 0.1 sec.");
    let user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com"
    };
    cb(user);
  }, 100);
};

test("fetch a user", done => {
  fetchUser(1, user => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com"
    });
    done();
  });
});

let fetchUser2 = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("wait 0.1 sec2");
      let user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com"
      };
      resolve(user);
    }, 100);
  });
};

test("fetch a user", () => {
  return fetchUser2(1).then(user => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com"
    });
  });
});

test("fetch a user", async () => {
  let user = await fetchUser2(1);
  expect(user).toEqual({
    id: 1,
    name: "User1",
    email: "1@test.com"
  });
});
