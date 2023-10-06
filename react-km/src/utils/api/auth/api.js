export const login = async (data) => {
  try {
    const dummyUser = { username: "admin", password: "password123" };

    if (
      data.username === dummyUser.username &&
      data.password === dummyUser.password
    ) {
      return data;
    } else if (
      data.username === dummyUser.username &&
      data.password !== dummyUser.password
    ) {
      throw Error("Invalid password");
    } else if (
      data.username !== dummyUser.username &&
      data.password === dummyUser.password
    ) {
      throw Error("Invalid username");
    } else {
      throw Error("Invalid username or password");
    }
  } catch (error) {
    throw Error(error.message);
  }
};
