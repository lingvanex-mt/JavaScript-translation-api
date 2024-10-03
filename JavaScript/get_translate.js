const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'Your authorization API key'
  },
  body: JSON.stringify({
    from: 'en_GB',
    to: 'de_DE',
    data: 'London is the capital and largest city of England and of the United Kingdom.',
    platform: 'api'
  })
};

fetch('https://api-b2b.backenster.com/b1/api/v3/translate', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
