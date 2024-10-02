const options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  body: JSON.stringify({platform: 'api'})
};

fetch('https://api-b2b.backenster.com/b1/api/v3/translate', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
