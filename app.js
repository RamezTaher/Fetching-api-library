const http = new EasyHTTP()

// Get Users

// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// USER Data

const data = {
  name: "Ramez Taher",
  username: "ramez100",
  email: "example@gmil.com",
}

// // Create User
// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// Update User

// http
//   .put("https://jsonplaceholder.typicode.com/users/5", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// Delete User
http
  .delete("https://jsonplaceholder.typicode.com/users/5")
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
