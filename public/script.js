// If we want to store any unsecure data to decrease API calls, to load the UI faster and to maintain session

localStorage.setItem(
  "user",
  JSON.stringify({ fName: "Vivek", lName: "Kushal" })
);

console.log(localStorage.getItem("user"));
