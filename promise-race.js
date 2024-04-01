const fetches = [
  //   Uncomment the line below to see the error message since the URL is invalid and it will resolve first
  //   fetch("https://bad-url.com"),
  fetch("https://pokeapi.co/api/v2/pokemon/1"),
  fetch("https://pokeapi.co/api/v2/pokemon/2"),
  fetch("https://pokeapi.co/api/v2/pokemon/3"),
];

Promise.race(fetches)
  .then((response) => {
    // First response to resolve will be logged
    console.log(response.url);
  })
  .catch((error) => {
    console.log(error.message);
  });
