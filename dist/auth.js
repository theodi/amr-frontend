const auth = require('basic-auth')

const admin = {
	'info@odi.org': { password: 'opendata'}
}

module.exports = function(req, res, next) {

	const user = auth(req)
	if (!user || !admin[user.name] || admin[user.name].password !== user.pass) {
    res.set('WWW-Authenticate', 'Basic realm="example"');
    return res.status(401).send();
  }
  return next();
}
