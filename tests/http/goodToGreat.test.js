const axios = require('axios');
axios.defaults.timeout = 1000

test('server returns 200 for /good-to-great', done => {
  axios.get('http://localhost:3000/good-to-great')
  .then(function (response) {
    expect(response.status).toBe(200)
    done()
  })
})


test('server returns 200 for /good-to-great/anything', done => {
  axios.get('http://localhost:3000/good-to-great/anything')
  .then(function (response) {
    expect(response.status).toBe(200)
    done()
  })
})
