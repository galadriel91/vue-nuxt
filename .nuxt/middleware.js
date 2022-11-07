const middleware = {}

middleware['offLogin'] = require('..\\middleware\\offLogin.js')
middleware['offLogin'] = middleware['offLogin'].default || middleware['offLogin']

middleware['onLogin'] = require('..\\middleware\\onLogin.js')
middleware['onLogin'] = middleware['onLogin'].default || middleware['onLogin']

export default middleware
