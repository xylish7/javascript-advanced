const fetches = [
  fetch("https://pokeapi.co/api/v2/pokemon/1"),
  // Uncomment the line below to see the error message
  // fetch("https://bad-url.com"),
  fetch("https://pokeapi.co/api/v2/pokemon/2"),
  fetch("https://pokeapi.co/api/v2/pokemon/3"),
];

Promise.all(fetches)
  .then((responses) => {
    responses.forEach((response) => {
      console.log(response.url);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
