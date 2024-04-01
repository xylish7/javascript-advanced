const fetches = [
  fetch("https://pokeapi.co/api/v2/pokemon/1"),
  fetch("https://bad-url"),
  fetch("https://pokeapi.co/api/v2/pokemon/3"),
];

Promise.allSettled(fetches)
  .then((responses) => {
    responses.forEach((response) => {
      console.log(response.status);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
