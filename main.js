var balance = document.getElementById("balance");

fetch("https://spreadsheetapimb.herokuapp.com/api/balance", {
  credentials: "omit",
})
  .then((response) => response.json())
  .then((data) => {
    balance.innerHTML = data.balance;
    console.log(balance); // Prints result from `response.json()` in getRequest
  })
  .catch((error) => {
    balance.innerHTML = "Error";
    console.log(error);
  });
