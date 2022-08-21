const http = new easyHTTP()

//  Get Posts
http.get("https://jsonplaceholder.typicode.com/posts", (err, posts) => {
  if (err) {
    console.log(err)
  } else {
    console.log(posts)
  }
})

//  Get Posts
http.get("https://jsonplaceholder.typicode.com/posts/1", (err, posts) => {
  if (err) {
    console.log(err)
  } else {
    console.log(posts)
  }
})

// Create Data
const data = {
  title: "custom",
  body: "custom body",
}

//  Create Post
http.post("https://jsonplaceholder.typicode.com/posts", data, (err, posts) => {
  if (err) {
    console.log(err)
  } else {
    console.log(posts)
  }
})

// // Update Post
// http.put("https://jsonplaceholder.typicode.com/posts/5", data, (err, post) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(post)
//   }
// })

// Delete Post
http.delete("https://jsonplaceholder.typicode.com/posts/5", (err, res) => {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
  }
})
