import axios from "axios";

export const resolvers = {
  Query: {
    async getUsers() {
      const users = await axios.get("https://api.github.com/users");

      return users.data.map(({ id, login, avatar_url }) => ({
        id,
        login,
        avatar_url,
      }));
    },
    async getUser(_: unknown, args: unknown) {
      const user = await axios.get(
        `https://api.github.com/users/${(args as any).name}`
      );
      return {
        id: user.data.id,
        login: user.data.login,
        avatar_url: user.data.avatar_url,
      };
    },
  },
  Mutation: {
    async createUser(_: unknown, args: any) {
      // TODO define user interface
      // TODO write user data to db if user not exist allready
      console.log(args);

      return "User has been created";
    },
  },
};
