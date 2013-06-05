/*
 * @param (data) login record object containing username, password,
 * and answers to secret questions
 */
 var rk = require('required-keys')
 module.exports = function login (data, cb) {
   // login to nstar website here
   var keys = ['username', 'password', 'secretAnswers']
   var err = rk.truthySync(data, keys)
   if (err) {
      return cb({
        message: 'failed to login to NStar website, missing key in data',
        error: err,
        stack: new Error().stack
    })
  }
  cb('not implemented')
}
