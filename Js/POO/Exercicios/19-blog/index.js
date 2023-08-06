const Author = require("./Author");

const john = new Author("John Doe")
const post = john.writePost("Look that", "Lorem ipsum...")

post.addComment("André", "Great moment!")
post.addComment("John", "Yes! I'm very happy, thank you.")

console.log(john);
console.log(post);