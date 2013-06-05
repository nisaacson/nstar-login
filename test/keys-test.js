var should = require('should')
var login = require('../')
describe('Keys', function() {
    var data
    beforeEach(function() {
        data = {
            username: 'fooUsername',
            password: 'barPassword',
            secretAnswers: {
                question1: 'foo answer 1'
            }
        }
    })
    it('should reject login requests missing the username key', function(done) {
        delete data.username
        login(data, function (err, reply) {
            should.exist(err)
            err.error[0].key.should.eql('username')
            done()
        })
    })

    it('should reject login requests missing the password key', function(done) {
        delete data.password
        login(data, function (err, reply) {
            should.exist(err)
            err.error[0].key.should.eql('password')
            done()
        })
    })

    it('should reject login requests missing the secretAnswers key', function(done) {
        delete data.secretAnswers
        login(data, function (err, reply) {
            should.exist(err)
            err.error[0].key.should.eql('secretAnswers')
            done()
        })
    })
})
