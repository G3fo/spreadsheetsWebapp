function getBalance() {
  fetch("https://spreadsheetapimb.herokuapp.com/api/balance", {
    mode: "no-cors",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Prints result from `response.json()` in getRequest
    })
    .catch((error) => console.error(error));
}
