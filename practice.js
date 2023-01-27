// function showRating(rating) {
//   let ratings = "";
//   for (let i = 0; i < Math.floor(rating); i++) {
//     ratings += "*";
//     if (i !== Math.floor(rating - 1)) {
//       ratings += " ";
//     }
//   }
//   if (!Number.isInteger(rating)) {
//     ratings += " .";
//   }
//   return ratings;
// }

// console.log(showRating(4.5));

// function showRating(rating) {
//   let ratings = "";
//   for (let i = 0; i < Math.floor(rating); i++) {
//     ratings += "*";
//     if (i !== Math.floor(rating)) {
//       ratings += " ";
//     }
//   }
//   if (!Number.isInteger(rating)) {
//     ratings += ".";
//   }

//   return console.log(ratings);
// }

// showRating(0.5);

////////////////////////////////////////////
// Q2 Sort Low to High

// function sortLowToHigh(rating) {
//   return rating.sort((a, b) => b - a);
// }

// console.log(sortLowToHigh([12, 115, 40, 10, 40, 12342]));

////////////////////////////////////////////
// Q3 Sort from highest  to lowest price

// function sortHighToLow(numbers) {
//   return numbers.sort((a, b) => {
//     console.log(b.price, a.price);
//     return b.price - a.price;
//   });
// }

// console.log(
//   sortHighToLow([
//     { id: 1, price: 50 },
//     { id: 2, price: 0 },
//     { id: 3, price: 500 },
//     { id: 4, price: -500 },
//   ])
// );

///////////////
//Q5 Promises

// async function postsByUser(userId) {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await response.json();

//   const posts = data.filter((element) => element.userId === userId);
//   console.log(posts);
// }

// postsByUser(4);//////

//////////////////////
// Q6

// https://jsonplaceholder.typicode.com/todos

async function filterTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  const incompleteTodo = data
    .filter((element) => !element.completed)
    .slice(0, 6);
  console.log(incompleteTodo);
}

filterTodo();
