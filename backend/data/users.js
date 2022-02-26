import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@sample.com",
    password: bcrypt.hashSync("abcd", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@sample.com",
    password: bcrypt.hashSync("abcd", 10),
  },
  {
    name: "Jane Doe",
    email: "Jane@sample.com",
    password: bcrypt.hashSync("abcd", 10),
  },
];

export default users;
