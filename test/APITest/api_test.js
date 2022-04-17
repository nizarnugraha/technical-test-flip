Feature('Rest API')

  Scenario('GET Meta Data Credos', ({I}) => {
    getResponseCredos = I.sendGetRequest('?title=credo&status=completed')
  });