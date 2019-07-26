var getRequest = new digestAuthRequest('GET', '/users', 'rodolfo', '556556');
getRequest.request(
  function(data) {
    console.log(data);
  },
  function(errorCode) {
    console.log('Falha');
    console.log(errorCode);
  }
);
