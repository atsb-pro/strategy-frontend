function runStrategy() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.text())
    .then(function (data) {
      document.querySelector(".result").innerHTML = data;
    });
}
