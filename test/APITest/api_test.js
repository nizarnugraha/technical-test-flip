Feature('Rest API')
  const assert = require('assert');
  Scenario('GET Meta Data Credos', ({I}) => {
    I.sendGetRequest('?title=credo&status=completed').then(response =>{
      assert.equal(response.status, 200);
    })
  });